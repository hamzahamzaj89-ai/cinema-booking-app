import { configSupabase } from "../config/supabase.config.js";

export const protectAddress = async (req:any, res:any, next:any) => {

    const supabase: any = configSupabase()
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};