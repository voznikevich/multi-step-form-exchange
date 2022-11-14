import React from "react";
import {useForm, useStep} from "react-hooks-helper";
import {Names} from "./stepForm/Names";
import {Address} from "./stepForm/Address";
import {Contact} from "./stepForm/Contact";
import {Review} from "./stepForm/Review";
import {Submit} from "./stepForm/Submit";
import {Amount} from "./stepForm/Amount";

const defaultData = {
    fromAmount: "",
    fromCurrency: "",
    toAmount: "",
    toCurrency: "",
    firstName: "",
    lastName: "",
    nickName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
};

const steps = [
    { id: "amount" },
    { id: "names" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" },
];

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation };

    switch (step.id) {
        case "amount":
            return <Amount {...props} />;
        case "names":
            return <Names {...props} />
        case "address":
            return <Address {...props} />;
        case "contact":
            return <Contact {...props} />;
        case "review":
            return <Review {...props} />;
        case "submit":
            return <Submit {...props} />;
    }

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    );
};
