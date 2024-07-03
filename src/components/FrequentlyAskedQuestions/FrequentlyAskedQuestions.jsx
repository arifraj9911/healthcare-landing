const FrequentlyAskedQuestions = () => {
  return (
    <div className="mt-40">
      <div className="text-left">
        <span className="text-[16px] border px-4 py-2 rounded-3xl">FAQ</span>
        <h2 className="text-4xl my-4 w-3/5 leading-[54px] font-semibold">
          Frequntly Asked Question
        </h2>
      </div>
      <div className="join join-vertical text-left w-full space-y-3 mt-8">
        <div className="collapse collapse-arrow join-item shadow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What are your office hours?
          </div>
          <div className="collapse-content">
            <p className="text-[#343268] font-normal">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item shadow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <p className="text-[#343268] font-normal">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item shadow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you accept insurance?
          </div>
          <div className="collapse-content">
            <p className="text-[#343268] font-normal">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item shadow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <p className="text-[#343268] font-normal">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item shadow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content">
            <p className="text-[#343268] font-normal">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
