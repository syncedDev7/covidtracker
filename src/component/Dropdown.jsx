import React from "react";

export default function Dropdown({stateName,setState}) {

    const handleSelectChange = (event) => {
        setState(event.target.value);
      };

    return (
        <div className="relative flex gap-4 w-full justify-center items-center">
            <p className="text-xl font-medium font-poppins">Select State :</p>
            <select className="w-56 p-2.5 text-xl font-semibold text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" value={stateName} onChange={handleSelectChange}>
                <option value="AN" >Andaman & Nicobar</option>
                <option value="AP" >Andhra Pradesh</option>
                <option value="AR" >Arunachal Pradesh</option>
                <option value="AS" >Assam</option>
                <option value="BR" >Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chattisgarh</option>
                <option value="DL">Delhi</option>
                <option value="DN">Dadra & Nagar Haveli and Daman & Diu</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujrat</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="HR">Haryana</option>
                <option value="JH">Jharkhand</option>
                <option value="JK">Jammu & Kashmir</option>
                <option value="KN">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MH">Maharashtra</option>
                <option value="ML">Meghalaya</option>
                <option value="MN">Manipur</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="PY">Puducherry</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TG">Telangana</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
            </select>
        </div>
    );
}