export default function questions(req, res, next) {
  console.log(`REQ : ${req.method} | ${req.url}`);
  next();
}
