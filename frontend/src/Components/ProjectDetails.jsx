import Identicons from "react-identicons";
import { FaEthereum } from "react-icons/fa";
import { setGlobalState } from "../store";

const ProjectDetails = () => {
  return (
    <div className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
          <img
            src={
              "https://media.cnn.com/api/v1/images/stellar/prod/230822164529-05-apptronik-apollo-robot.jpg?c=original"
            }
            alt={"Project view"}
            className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {"Creating a Household Robot"}
              </h5>
              <small className="text-gray-500">2 days left</small>
            </div>

            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
                <Identicons
                  className="rounded-full shadow-md"
                  string={"0x123...aet5"}
                  size={15}
                />
                <small className="text-gray-700">0x123...aet5</small>
                <small className="text-gray-500 font-bold">
                  14 backers
                </small>
              </div>

              <div className="font-bold">
                <small className="text-gray-500">Open</small>
              </div>
            </div>

            <div>
              <p className="text-sm font-light mt-2">
                Building a houseHold robot for yah
              </p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                  style={{
                    width: `${50}%`,
                  }}
                ></div>
              </div>

              <div className="flex justify-between items-center font-bold mt-2">
                <small>4 ETH Raised</small>
                <small className="flex justify-start items-center">
                  <FaEthereum />
                  <span>{17} ETH</span>
                </small>
              </div>

              <div className="flex justify-start items-center space-x-2 mt-4">
                <button
                  onClick={() => {
                    setGlobalState("backModal", "scale-100");
                  }}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-green-700"
                >
                  Back Project
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-orange-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-orange-700"
                >
                  Payout
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-gray-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-gray-700"
                  onClick={() => {
                    setGlobalState("updateModal", "scale-100");
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-red-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-red-700"
                  onClick={() => {
                    setGlobalState("deleteModal", "scale-100");
                  }}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-gray-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-gray-700"
                >
                  Project Closed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
