"use client";
import { useState } from "react";
import About from "./components/About";
import Address from "./components/Address";
import BottomFooter from "./components/BottomFooter";
import BreadCrums from "./components/BreadCrums";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import Selection from "./components/Selection";
import TopHeader from "./components/TopHeader";
import { SetValuesFunction, Values } from "./components/type/address";
const initialValues = {
  uniqueSerialId: "34-56789012-3",
  altId: "",
  dln: "777-67-7777",
  lastName: "WAYNE",
  givenName: "BRUCE",
  gender: "male",
  dateOfBirth: "",
  street: "2043 HILLTOP DR",
  city: "LOS ANGELES",
  uniqueId: "CA",
  zip: "90210",
  country: "USA",
  telephone: "",
  email: "",
  sendALater: false,
  date: "",
  comments: "",
};
export default function Home() {
  const [values, setValues] = useState<Values>(initialValues);
  const updateValues: SetValuesFunction = (key, value) => {
    setValues({ ...values, [key]: value });
  };
  const handleSubmit = () => {
    console.log("🚀 ~ form data==>", values);
  };
  const handleReset = () => {
    setValues(initialValues);
  };
  return (
    <main className="min-h-screen">
      <TopHeader />
      <Navbar />
      <div className="px-[80px]">
        <BreadCrums />
        <PageTitle />
      </div>
      <div className="px-[101px]">
        <Selection />
        <div className="mt-[33px] mb-[95px] flex justify-between">
          <About values={values} updateValues={updateValues} />
          <Address values={values} updateValues={updateValues} />
        </div>
        <Footer
          values={values}
          updateValues={updateValues}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
        <div className="h-[330px]" />
      </div>
      <BottomFooter />
    </main>
  );
}
