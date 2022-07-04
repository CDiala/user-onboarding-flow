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
import { updateObjResult, updateOption } from "../../utils/updateObject";
import { stepArray } from "../../data/stepperCount";
import isKeyComplete from "../../utils/validateObject";
import StatusLabel from "../shared/StatusLabel";

const EnrolmentForm = () => {
  const [count, setCount] = useState(0);
  const [objEnrolment, setObjEnrolment] = useState(finalEnrolmentObject);
  const dataOne = enrolmentInfoArray[count];
  const lastIndex = enrolmentInfoArray.length - 1;
  const [isObjectComplete, setIsObjectComplete] = useState(false);
  const [isInvalid, setIsInvalid] = useState(null);

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

  const navigateForm = () => {
    if (isObjectComplete && count + 1 === lastIndex) {
      setCount(count + 1);
      console.log("done");
    } else if (count + 1 < lastIndex) {
      setCount(count + 1);
    } else {
    }
  };

  const checkValidation = () => {
    console.log(
      `isObjectComplete: ${isObjectComplete} \ncount + 1: ${
        count + 1
      } \nlastIndex: ${lastIndex}`
    );
    if (!isObjectComplete && count + 1 === lastIndex) {
      setIsInvalid(true);
    } else if (isObjectComplete && count + 1 === lastIndex) {
      setIsInvalid(false);
    } else {
    }
  };

  useEffect(() => {
    setIsInvalid(null);
    updateOption(setObjEnrolment, objEnrolment, "selectedOption", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (count + 1 === lastIndex) {
      setIsObjectComplete(isKeyComplete(objEnrolment, 5));
    } else setIsObjectComplete(false);
  }, [count, lastIndex, objEnrolment]);

  return (
    <div className={enrolmentContainerStyle()}>
      <Logo />
      <StepperControl count={count} stepArray={stepArray} setCount={setCount} />
      {count === lastIndex && (
        <img className={successImageStyle()} src={success} alt="success" />
      )}
      <div className={formCaptionStyle()}>
        <h2 className={formTitleStyle()}>
          {count === lastIndex
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
      {isInvalid && (
        <StatusLabel
          text={"incomplete data provided"}
          style={`text-red-500 italic font-bold mb-5`}
        />
      )}
      <Button
        text={count < lastIndex ? "Create Workspace" : "Launch Eden"}
        onClick={() => {
          checkValidation();
          navigateForm();
        }}
      />
    </div>
  );
};

export default EnrolmentForm;
