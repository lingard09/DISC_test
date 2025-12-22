import { supabase } from "./supabase";
import bcrypt from "bcryptjs"; // 비밀번호 해싱용 (설치 필요)

// Supabase 기반 API 서비스
export const authServiceSupabase = {
  // 회원가입
  signUp: async (name, track, password) => {
    console.log("📤 Supabase 회원가입 요청:", { name, track });

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name,
          track,
          password, // 임시로 해싱 제거 (테스트용)
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("❌ Supabase 에러:", error);
      if (error.code === "23505") {
        // Unique constraint violation
        throw new Error("이미 존재하는 사용자명입니다.");
      }
      throw error;
    }

    console.log("✅ Supabase 회원가입 성공:", data);
    return { memberID: data.id, name: data.name, track: data.track };
  },

  // 로그인
  login: async (name, password) => {
    console.log("📤 Supabase 로그인 요청:", { name });

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("name", name)
      .single();

    if (error || !data) {
      console.error("❌ 사용자 조회 실패:", error);
      throw new Error("사용자를 찾을 수 없습니다.");
    }

    // 비밀번호 직접 비교 (임시)
    if (data.password !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    console.log("✅ Supabase 로그인 성공:", { id: data.id, name: data.name });
    return { memberID: data.id, name: data.name, track: data.track };
  },

  // 사용자 정보 조회
  getUserInfo: async (memberID) => {
    const { data, error } = await supabase
      .from("users")
      .select("id, name, track, disc_type")
      .eq("id", memberID)
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  // DISC 테스트 결과 저장
  saveDiscResult: async (memberID, scores, resultType) => {
    const { data, error } = await supabase
      .from("disc_results")
      .insert([
        {
          member_id: memberID,
          d_score: scores.d,
          i_score: scores.i,
          s_score: scores.s,
          c_score: scores.c,
          result_type: resultType,
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    // users 테이블의 disc_type도 업데이트
    await supabase
      .from("users")
      .update({ disc_type: resultType })
      .eq("id", memberID);

    return data;
  },

  // 간단한 DISC 결과 저장 (이름만 사용)
  saveSimpleDiscResult: async (userName, scores, resultType) => {
    console.log("📤 간단 저장 시도:", { userName, scores, resultType });

    const { data, error } = await supabase
      .from("disc_results")
      .insert([
        {
          user_name: userName,
          d_score: scores.d,
          i_score: scores.i,
          s_score: scores.s,
          c_score: scores.c,
          result_type: resultType,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("❌ 저장 에러:", error);
      throw error;
    }

    console.log("✅ 저장 성공:", data);
    return data;
  },
};

// 로컬 스토리지 관리
export const storageService = {
  setMemberID: (memberID) => {
    window.localStorage.setItem("memberID", memberID);
  },

  getMemberID: () => {
    return window.localStorage.getItem("memberID");
  },

  removeMemberID: () => {
    window.localStorage.removeItem("memberID");
  },
};
