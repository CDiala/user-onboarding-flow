import { useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import Input from "../shared/Input";
import Logo from "../shared/Logo";
import StepperControl from "../widget/StepperControl";
import {
  enrolmentInfoArray,
  finalEnrolmentObject,
} from "../../data/enrolmentFormData";
import eden from "../../assets/eden.png";
import success from "../../assets/success.png";

const EnrolmentForm = () => {
  const [count, setCount] = useState(0);
  const [objEnrolment, setObjEnrolment] = useState(finalEnrolmentObject);

  const dataOne = enrolmentInfoArray[count];

  const textChanged = (x) => {
    let property = x.target.name;
    let value = x.target.value;
    setObjEnrolment({ ...objEnrolment, [property]: value });
  };

  return (
    <div className="max-w-131 flex flex-col justify-center items-center m-auto h-full">
      <Logo />

      <StepperControl count={count} />

      {count === enrolmentInfoArray.length - 1 && (
        <img className="mb-12" src={success} alt="success icon" />
      )}

      <div className="w-4/5 md:w-full mb-9 md:mb-14 text-center">
        <h2 className="mb-[22px] text-xl md:text-3xl font-bold ">
          {count === enrolmentInfoArray.length - 1
            ? dataOne.title.replace("name", objEnrolment["Display Name"])
            : dataOne.title}
        </h2>
        <p className="text-gray-500 text-small md:text-lg">{dataOne.note}</p>
      </div>

      <div
        id="inputContainer"
        className={`w-4/5 md:w-100 flex flex-col ${
          count !== 2 ? "gap-y-6" : "md:flex-row gap-y-6 md:gap-x-8"
        } items-center mb-6`}
      >
        {dataOne.control === "card" &&
          dataOne.info.map((info, index) => {
            return (
              <Card
                key={index}
                img={eden}
                id={index}
                text={[info.label, info.placeholder]}
              />
            );
          })}

        {dataOne.control === "input" &&
          dataOne.info.map((info, index) => {
            return (
              count !== 3 && (
                <Input
                  key={index}
                  placeholder={info.placeholder}
                  optionalPlaceholder={info.optionalPlaceholder}
                  readOnly={info.isOptional}
                  title={[info.label]}
                  isOptional={info.isOptional}
                  onChange={(e) => textChanged(e)}
                  value={objEnrolment[info.label]}
                  type={info.type}
                />
              )
            );
          })}
      </div>

      <Button
        text={
          count < enrolmentInfoArray.length - 1
            ? "Create Workspace"
            : "Launch Eden"
        }
        onClick={() => {
          if (count < enrolmentInfoArray.length - 1) setCount(count + 1);
        }}
      />
    </div>
  );
};

export default EnrolmentForm;
