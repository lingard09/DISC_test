import { supabase } from "./supabase";

// Supabase 기반 API 서비스
export const authServiceSupabase = {
  // 간단한 DISC 결과 저장 (이름과 트랙만 사용)
  saveSimpleDiscResult: async (userName, userTrack, scores, resultType) => {
    const { data, error } = await supabase
      .from("disc_results")
      .insert([
        {
          user_name: userName,
          user_track: userTrack,
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

    return data;
  },
};
