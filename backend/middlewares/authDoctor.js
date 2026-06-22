import jwt from "jsonwebtoken";
//Doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;
    if (!dtoken) {
      return res.json({
        success: false,
        message: "Not authorized login again",
      });
    }
    // verify token
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
    req.body.docId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);

    if (error.name === "TokenExpiredError") {
      return res.json({
        success: false,
        message: "Session expired, login again",
      });
    }
    res.json({ success: false, message: error.message });
  }
};
export default authDoctor;
