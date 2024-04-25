import { Link } from "react-router-dom";

const EventTypes = () => {
  return (
    <div className="w-full max-w-[1264px] mx-auto px-8 grow">
      <main className="pb-10 relative">
        <div className="flex flex-col gap-8">
          <div className="w-full py-4 flex flex-col justify-between items-start gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 flex-wrap items-center">
                <h1 className="text-3xl font-bold">Event types</h1>
              </div>
            </div>
          </div>
          {/* Home content */}
          <div>
            <div className="flex flex-col gap-8 mb-16">
              <div>
                {/* event type list */}
                <div>
                  {/* event type group list */}
                  <div>
                    {/* event type group list item */}
                    <div>
                      {/* list header */}
                      <div className="flex justify-between mb-5 border-b border-[#CCCCCC]"></div>
                      {/* new event type container button */}
                      <div className="flex gap-[30px] justify-around items-start">
                        <div className="mb-5">
                          <Link
                            to={`#`}
                            className="border py-1 px-3 rounded-[40px] w-full border-blue-600 text-blue-600"
                          >
                            <span>New Event Type</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventTypes;
