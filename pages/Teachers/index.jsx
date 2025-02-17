import { GET } from "@/API/getRepository";
import React from "react";

const index = (props) => {
  console.log(props.resTeacherAPI);
  return <div>index</div>;
};

export default index;

export async function getStaticProps() {
  const urlTeacherAPI = await GET("teachers/list/");
  const resTeacherAPI = await urlTeacherAPI.json();
  return {
    props: { resTeacherAPI },
  };
}
