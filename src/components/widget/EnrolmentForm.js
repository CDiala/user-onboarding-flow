import { useEffect, useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import Input from "../shared/Input";
import Logo from "../shared/Logo";
import StepperControl from "../widget/StepperControl";
import { enrolmentInfoArray } from "../../data/enrolmentFormData";
import { finalEnrolmentObject } from "../../utils/createObject";
import success from "../../assets/success.png";
import {
  enrolmentContainerStyle,
  formCaptionStyle,
  formInputControlStyle,
  formSubheaderStyle,
  formTitleStyle,
  successImageStyle,
} from "./enrolmentFormStyles";
import setElementStyle from "../../utils/toggleClass";
import { getId } from "../../utils/retrieveString";
import updateObjResult from "../../utils/updateState";
import { stepCount } from "../../data/stepperCount";

const EnrolmentForm = () => {
  const [count, setCount] = useState(0);
  const [objEnrolment, setObjEnrolment] = useState(finalEnrolmentObject);
  const dataOne = enrolmentInfoArray[count];

  useEffect(() => {
    console.log(objEnrolment);
  }, [objEnrolment]);

  const setSelectedCard = (e) => {
    const id = getId(e);
    const selectedOption = document
      .getElementById(id)
      .getElementsByTagName("h3")[0].innerText;

    updateObjResult(
      setObjEnrolment,
      objEnrolment,
      "selectedOption",
      selectedOption
    );
  };

  return (
    <div className={enrolmentContainerStyle()}>
      <Logo />

      <StepperControl count={count} stepCount={stepCount} setCount={setCount} />

      {count === enrolmentInfoArray.length - 1 && (
        <img className={successImageStyle()} src={success} alt="success icon" />
      )}

      <div className={formCaptionStyle()}>
        <h2 className={formTitleStyle()}>
          {count === enrolmentInfoArray.length - 1
            ? dataOne.title.replace("name", objEnrolment["Display Name"])
            : dataOne.title}
        </h2>

        <p className={formSubheaderStyle()}>{dataOne.note}</p>
      </div>

      <div id="inputContainer" className={`${formInputControlStyle(count)}`}>
        {dataOne.control === "card" &&
          dataOne.info.map((info, index) => {
            return (
              <Card
                key={index}
                img={info.img}
                id={`card${index}`}
                text={[info.label, info.placeholder]}
                onClick={(e) => {
                  setElementStyle("inputContainer", getId(e), "border-active");
                  setSelectedCard(e);
                }}
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
                  onChange={(e) =>
                    updateObjResult(
                      setObjEnrolment,
                      objEnrolment,
                      e.target.name,
                      e.target.value
                    )
                  }
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
