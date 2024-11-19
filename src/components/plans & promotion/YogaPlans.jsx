import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { yogaPlans } from "./Plans"; // Adjust the path as needed

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function YogaPlans() {
  return (
    <div className="text-heading flex flex-col items-center p-4 md:p-8 lg:p-12 mt-[150px]">
      <div className="text-center mb-10 lg:mb-14">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Pricing & Plans
        </h2>
        <p className="text-base lg:text-lg max-w-lg mx-auto mt-4 text-gray-600">
          Choose a class package and start your yoga journey today. We offer group and private classes, including options for tourists!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 ">
        {yogaPlans.map((plan, index) => (
          <Card
            key={index}
            color="heading"
            variant="gradient"
            className="w-full max-w-[20rem] p-8 bg-gradient-to-r from-green to-white border-heading shadow-lg"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-heading pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase text-heading border-bottom border-heading "
              >
                {plan.title}
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                {plan.plans.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal text-heading">
                      {item.name}
                      {item.price && ` - ${item.price}`}
                      {item.costPerClass && ` ${item.costPerClass}`}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default YogaPlans;
