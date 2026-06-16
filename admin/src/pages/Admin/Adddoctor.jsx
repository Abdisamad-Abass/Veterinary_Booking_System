import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
const Adddoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, atoken } = useContext(AdminContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 }),
      );
      //console log formdata

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { atoken } },
      );
      if (data.success) {
        toast.success(data.message);

        // reset image
        setDocImg(null);

        // reset text fields
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 year");
        setFees("");
        setAbout("");
        setSpeciality("Livestock Vet");
        setDegree("");
        setAddress1("");
        setAddress2("");

        // reset file input DOM
        document.getElementById("doc-img").value = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="w-full md:p-5 p-3 bg-[#F1F3FF]">
      <h1 className="text-lg font-bold md:text-2xl">Add Doctor</h1>
      <p className="text-gray-500">
        Register a new healthcare professional to the medical network.
      </p>
      <div className="bg-white md:px-8 px-4 py-8 border rounded-xl w-full max-w-4xl max-h-[840vh] overflow-y-scroll mt-3">
        <div className="flex flex-col items-center gap-4 mb-8 text-gray-500">
          <label
            htmlFor="doc-img"
            className="flex flex-col items-center justify-center transition-all duration-300 border-2 border-gray-400 border-dashed rounded-full cursor-pointer w-28 h-28 hover:border-primary bg-gray-50 hover:bg-gray-100"
          >
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>Upload doctor picture</p>
        </div>
        <div className="flex flex-col items-start gap-10 text-gray-600 lg:flex-row">
          <div className="flex flex-col w-full gap-4 lg:flex-1">
            <div className="flex flex-col flex-1 gap-1">
              <p>Doctor name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="px-3 py-2 border border-gray-300 rounded"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="px-3 py-2 border border-gray-300 rounded"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <p>Set Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="px-3 py-2 border border-gray-300 rounded"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="px-3 py-2 border border-gray-300 rounded"
              >
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
                <option value="3 years">3 years</option>
                <option value="4 years">4 years</option>
                <option value="5 years">5 years</option>
                <option value="6 years">6 years</option>
                <option value="7 years">7 years</option>
                <option value="8 years">8 years</option>
                <option value="9 years">9 years</option>
                <option value="10 years">10 years</option>
              </select>
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="px-3 py-2 border border-gray-300 rounded"
                type="number"
                placeholder="fees"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 lg:flex-1">
            <div className="flex flex-col flex-1 gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="px-3 py-2 border border-gray-300 rounded"
                name=""
                id=""
              >
                <option value="Livestock Vet">Livestock Vet</option>
                <option value="Theriogenologist">Theriogenologist</option>
                <option value="Vet Dermatologist">Vet Dermatologist</option>
                <option value="Vet Neonatologist">Vet Neonatologist</option>
                <option value="Vet Neurologist">Vet Neurologist</option>
                <option value="Vet Gastroenterologist">
                  Vet Gastroenterologist
                </option>
              </select>
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="px-3 py-2 border border-gray-300 rounded"
                type="text"
                placeholder="Education"
                required
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="px-3 py-2 border rounded"
                type="text"
                placeholder="address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="px-3 py-2 border border-gray-300 rounded"
                type="text"
                placeholder="address 2"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1">
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 border border-gray-300 rounded"
            placeholder="Write about doctor"
            rows={5}
            required
          />
        </div>
        {/* Submit button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-10 py-3 mt-4 text-white rounded-full bg-primary hover:bg-white hover:border hover:border-black hover:text-black"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default Adddoctor;
