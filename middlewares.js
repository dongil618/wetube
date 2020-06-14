import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

// const multerdVideo = multer({ dest: "uploads/videos/" });
// const multerAvatar = multer({ dest: "uploads/avatars/" }); //이건 추천하지 않는 방식 이걸 아마존(AWS)에서 해줘야함
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-2",
}); //S3 초기화

const multerVideo = multer({
  storage: multerS3({
    //storage설정 default값은 nodejs 파일 시스템
    s3: s3,
    acl: "public-read", //acl=acess control list
    bucket: "wetube618/video",
  }),
});

const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube618/avatar",
  }),
});

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); //오직 하나의 파일만 upload할 수 있다는 것을 의미
export const uploadAvatar = multerAvatar.single("avatar");

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
