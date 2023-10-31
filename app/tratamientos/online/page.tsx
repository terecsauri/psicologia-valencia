/* eslint-disable @next/next/no-img-element */
import AutorMain from "@/app/components/autores/AutorMain";
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const landingOnline = await getData("tratamientosOnline");
const landingText = await getData("tratamientosOnlineText3");
const landingTextSix = await getData("tratamientosOnlineText6");
const landingMedia = await getData("tratamientosOnlineMedia3");

export default function Online() {
  return (
    <div>
      {landingOnline?.map((singlePost: any) => {
        const {
          title,
          photo1,
          text1,
          text2,
          media2,
          bottonText,
          text4,
          text4bis,
          text5,
          button2,
          title2,
          text7,
          title3,
          title4,
          media4,
          text8,
          text9,
          media5,
          media6,
          title5,
          title6,
        } = singlePost.fields;
        return (
          <div key={""} className="mt-5">
            <hr className="mb-10 mt-10"></hr>
            <h1 className="font-bold mb-6 text-6xl ">{title}</h1>
            <div className="flex justify-center">
            <img
              src={"https://" + photo1.fields.file.url}
              alt="asdf"
              width="600"
              height="600"
              className="mb-10"
            />
            </div>

            {documentToReactComponents(text1)}
            <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-64 flex"></hr>
            <div className="flex mt-5 mb-5 max-lg:block">
              <div className="w-1/3 mr-4 max-lg:w-fit">{documentToReactComponents(text2)}</div>
              <img
                src={"https://" + media2.fields.file.url}
                alt="asdf"
                width="650"
                height="650"
              />
            </div>
          <div className="flex justify-center">
            <button className="bg-yellow-400 w-1/2 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5  max-lg:w-fit">
              {bottonText}
            </button>
            </div>
            <div className="grid grid-cols-2 max-lg:block">
              {landingText?.map((singlePost: any) => {
                const { title, body, id } = singlePost.fields;
                return (
                  <div key={id}>
                    <div>
                      <h1 className="font-bold mb-2 mt-2">{title}</h1>
                      <hr className="h-0.5 border-0 bg-black mt-2 mb-2 w-44"></hr>
                      <p className="mr-3">{documentToReactComponents(body)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
            <button className="bg-yellow-400 w-1/2 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5  max-lg:w-fit">
              {bottonText}
            </button>
</div>
            <div className="grid grid-cols-2  mb-20 max-lg:block">
              <div className="w-1/2 max-lg:w-fit">
                {documentToReactComponents(text4)}
                <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-64"></hr>
              </div>
              <div className="w-1/2 max-lg:w-fit">
                {documentToReactComponents(text4bis)}
                <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-64"></hr>
              </div>
            </div>
            {documentToReactComponents(text5)}
            <div className="flex justify-center">
            <button className="text-yellow-400 bg-black w-1/3 p-2 rounded-2xl font-bold mt-10 mb-10  max-lg:w-fit">
              <Link href="/tarifas">{button2}</Link>
              
            </button>
            </div>
            
            <h2 className="flex justify-center font-bold text-2xl mb-2">{title2}</h2>
            <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-1/2"></hr>

            <div className="grid grid-cols-3 mb-10 max-lg:block">
              {landingTextSix?.map((singlePost: any) => {
                const { title, body, media } = singlePost.fields;
                return (
                  <div key={""}>
                    <div>
                      <img
                        src={"https://" + media.fields.file.url}
                        alt="asdf"
                        width="150"
                        height="150"
                      />
                      <h1 className="font-bold mb-2 mt-2 text-lg">{title}</h1>
                      <p className="w-1/2">
                        <hr className="h-1 border-0 bg-black mt-5 mb-5 w-1/3"></hr>
                        {body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-1/2"></hr>
            {documentToReactComponents(text7)}

            <form className="flex flex-col mb-10 mt-10">
              <p className="font-bold flex justify-center">Nombre</p>
              <label className="flex justify-center">
                {" "}
                <input type="text" name="name" className="border-2 border-gray w-1/2 " placeholder="Juan" />{" "}
              </label>
              <p className="font-bold flex justify-center ">Correo Electrónico</p>
              <label className="flex justify-center">
                {" "}
                <input type="text" name="email" className="border-2 border-gray w-1/2" placeholder="pepito@ejemplo.es "/>{" "}
              </label>
              <p className="font-bold flex justify-center">Mensaje</p>
              <label className="flex justify-center">
                {" "}
                <textarea className="border-2 border-gray w-1/2 " placeholder="introduce tu mensaje "/>
              </label >
              <div className="flex justify-center mt-6">
              <input type="submit" value="Submit" className="font-bold border-2 border-black w-1/4 rounded-3xl"/>
              </div>
            </form>
            <h2 className="font-bold text-2xl mb-5">{title3}</h2>

            <div className="grid grid-cols-3 mb-10 max-lg:block max-lg:gap-5">
              {landingMedia?.map((singlePost: any) => {
                const { media } = singlePost.fields;
                return (
                  <div key={""} className="mb-3">
                    <img
                      src={"https://" + media.fields.file.url}
                      alt="asdf"
                      width="350"
                      height="350"
                    />
                  </div>
                );
              })}
            </div>
            <h2 className="font-bold text-2xl mb-5">{title4}</h2>
            <img
              src={"https://" + media4.fields.file.url}
              alt="asdf"
              width="650"
              height="650"
              className="mb-5"
            />

            {documentToReactComponents(text8)}

            <div className="grid grid-cols-2 mb-10 mt-10 max-lg:block">
              <div>
                <img
                  src={"https://" + media5.fields.file.url}
                  alt="asdf"
                  width="450"
                  height="450"
                />
                <p className="font-bold text-lg mb-2">{title5}</p>
              </div>
              <div>
                <img
                  src={"https://" + media6.fields.file.url}
                  alt="asdf"
                  width="450"
                  height="450"
                />
                <p className="font-bold text-lg mb-2">{title6}</p>
              </div>
            </div>

            {documentToReactComponents(text9)}

          </div>
        );
      })}
      <AutorMain />
    </div>
  );
}
