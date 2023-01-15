import React from "react";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

const success = () => {
  const router = useRouter();

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks form email {router.query.name}✨
        </h1>
        <p className="text-lg text-gray-500">
          We have sent your email over at {router.query.email}. We will get back
          to you as soon as can!
        </p>
      </div>
    </m.main>
  );
};

export default success;
