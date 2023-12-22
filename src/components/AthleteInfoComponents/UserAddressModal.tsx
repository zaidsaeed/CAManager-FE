import React, { useContext, useState } from "react";
import "./UserAddressModal.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";
import axios from "axios";

const UserAddressModal = () => {
  const navigate = useNavigate();
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const { user, setUser } = useContext(AppContext);

  const API_URL = "https://camanager.onrender.com";

  const attachAddressToUser = async (): Promise<void> => {
    const userEmail = user ? user.email : "";
    const requestBody = {
      addressLine1,
      addressLine2,
      city,
      province,
      country,
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    await axios
      .put(
        `${API_URL}/api/v1/users/addresses?userEmail=${userEmail}`,
        requestBody,
        axiosConfig
      )
      .then((res) => {
        //TODO: display toast here
        return true;
        return navigate("/home");
      })
      .catch((err) => {
        // placeErrorOnInputs(err.response.data);
      });
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <div className="modal-dialog" style={{ margin: 0, maxWidth: "none" }}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="addressLine1" className="form-label mt-4">
                Address Line 1
              </label>
              <input
                type="text"
                className="form-control"
                id="addressLine1"
                aria-describedby="addressLine1Help"
                placeholder="Enter Street Number, Street Name"
                onChange={(e) => setAddressLine1(e.target.value)}
                value={addressLine1}
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressLine2" className="form-label mt-4">
                Address Line 2
              </label>
              <input
                type="text"
                className="form-control"
                id="addressLine2"
                aria-describedby="addressLine2Help"
                placeholder="Enter Apt Number, Unit Number, etc."
                onChange={(e) => setAddressLine2(e.target.value)}
                value={addressLine2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city" className="form-label mt-4">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                aria-describedby="cityHelp"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>

            <div className="form-group">
              <label htmlFor="province" className="form-label mt-4">
                Province
              </label>
              <input
                type="text"
                className="form-control"
                id="province"
                aria-describedby="provinceHelp"
                placeholder="Province"
                onChange={(e) => setProvince(e.target.value)}
                value={province}
              />
            </div>

            <div className="form-group">
              <label htmlFor="country" className="form-label mt-4">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                aria-describedby="countryHelp"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => attachAddressToUser()}
            >
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddressModal;
