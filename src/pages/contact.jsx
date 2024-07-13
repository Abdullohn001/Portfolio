import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex gap-[375px]">
      <div className="w-[380px] rounded-2xl mt-[150px] ml-5  h-[700px]">
        <div className="inst-img w-[380px] h-[500px]">
          <Link to="https://www.instagram.com/ryuvzaki?igsh=MW9pdHdobWtmcTJxYQ==">
            <h1 className="pt-[430px] text-4xl ml-[100px]">My Instagram</h1>
          </Link>
        </div>
      </div>
      <h1 className="text-center mt-[600px] ml-[100px] text-2xl text-white italic">
        Contact <br /> Rruzaki <br />
        with{" "}
        <Link className="btn btn-ghost text-xl" to="https://t.me/ryuvza_ki">
          Telegram
        </Link>
      </h1>
      <div className="w-[380px] rounded-2xl mt-[150px]  h-[700px]">
        <div className="youtube-img w-[380px] h-[500px]">
          <Link to="https://youtube.com/@ryuvzaki?si=iv5TfppQ-onIw0Xm">
            <h1 className="pt-[430px] text-4xl ml-[100px]">My YouTube</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
