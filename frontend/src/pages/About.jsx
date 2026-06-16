import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center text-gray-500">
        <p>
          ABOUT <span className="font-medium text-gray-700">US</span>
        </p>
      </div>
      <div className="flex flex-col gap-12 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image2}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 text-sm text-gray-600 md:-2/4">
          <p>
            Welcome to vetdoctors, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At vetdoctors, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            vetdoctors is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, vetdoctors is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision </b>
          <p>
            Our vision at vetdoctors is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="my-4 text-xl">
        <p>
          WHY{" "}
          <span className="font-semibold text-gray-700">CHOOSE US</span>{" "}
        </p>
      </div>
      <div className="flex flex-col mb-20 md:flex-row">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Easily connect with a network of trusted veterinary professionals
            near you..
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to keep your animal&apos;s
            health on track.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
