"use client";

import { useState } from "react";

export default function Home() {
  const [Clientes, setClientes] = useState([
    {
      gender: "female",
      name: { title: "Mrs", first: "Neea", last: "Jutila" },
      location: {
        street: { number: 6279, name: "Satakennankatu" },
        city: "Lahti",
        state: "North Karelia",
        country: "Finland",
        postcode: 91217,
        coordinates: { latitude: "-28.0039", longitude: "115.1628" },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "neea.jutila@example.com",
      login: {
        uuid: "a369ac65-e89c-4a7d-9913-1f99325c8518",
        username: "bluebutterfly969",
        password: "alien",
        salt: "FLVNDZtM",
        md5: "0b4a2a412f0f43bed4d75c7ceeaac2ca",
        sha1: "289561253a7497086dc91ab149e75d2585348c47",
        sha256:
          "f17d651d502f75f9d1757a3ec3b03451b49bb37d166ab233d05ed372fac3579f",
      },
      dob: { date: "1976-11-28T00:06:55.298Z", age: 46 },
      registered: { date: "2014-03-22T02:04:09.230Z", age: 9 },
      phone: "03-385-305",
      cell: "041-585-19-67",
      id: { name: "HETU", value: "NaNNA624undefined" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/23.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
      },
      nat: "FI",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Noe", last: "Rolland" },
      location: {
        street: { number: 2407, name: "Avenue Tony-Garnier" },
        city: "Le Havre",
        state: "Finistère",
        country: "France",
        postcode: 50304,
        coordinates: { latitude: "-68.6893", longitude: "8.6437" },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      email: "noe.rolland@example.com",
      login: {
        uuid: "d81fac93-963b-4e23-9647-2a9d43c10d61",
        username: "smallgorilla162",
        password: "555555",
        salt: "iPK1smYg",
        md5: "bd48fc7d625fb546f7f1397a32246a1a",
        sha1: "84d2d6abba04e13a5aa4ec963029caf410f957a2",
        sha256:
          "d0d30af10fe3a1afe0f2d8df26eae3bdd63d59edb6a40f543785be318f378292",
      },
      dob: { date: "1989-06-17T15:02:59.685Z", age: 33 },
      registered: { date: "2020-02-21T17:07:09.806Z", age: 3 },
      phone: "01-63-45-19-13",
      cell: "06-12-99-91-44",
      id: { name: "INSEE", value: "1890570192647 79" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/60.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
      },
      nat: "FR",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Willie", last: "Van Leeuwe" },
      location: {
        street: { number: 5473, name: "Govert Flinckhage" },
        city: "'s-Heer Hendrikskinderen",
        state: "Drenthe",
        country: "Netherlands",
        postcode: "4507 NJ",
        coordinates: { latitude: "52.1135", longitude: "139.8305" },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "willie.vanleeuwe@example.com",
      login: {
        uuid: "91a5782e-2533-4fff-a76b-13e3a6cb6fdd",
        username: "whitemeercat846",
        password: "ohyeah",
        salt: "EJ9EM2D4",
        md5: "4408a4027153e7102c8c1d564f495c06",
        sha1: "56435b7a4f5a2a0f48af907d1c326d747693b48c",
        sha256:
          "1bb00fc9907717082a8bfbfb30f4e10102c4d0618bec977c83db6c3cb56498c4",
      },
      dob: { date: "1959-04-19T05:30:54.486Z", age: 64 },
      registered: { date: "2003-12-04T05:39:33.615Z", age: 19 },
      phone: "(001) 4026622",
      cell: "(06) 33206937",
      id: { name: "BSN", value: "21848888" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
      },
      nat: "NL",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Crystal", last: "Carpenter" },
      location: {
        street: { number: 7893, name: "Parker Rd" },
        city: "Toowoomba",
        state: "New South Wales",
        country: "Australia",
        postcode: 8215,
        coordinates: { latitude: "8.5097", longitude: "40.2663" },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "crystal.carpenter@example.com",
      login: {
        uuid: "00579f79-d7ea-4f9d-8141-2714ba336f68",
        username: "ticklishladybug808",
        password: "gobucks",
        salt: "hclRm1bv",
        md5: "023d3a4e554570913a4ae5cda6ad9763",
        sha1: "9fc09dea3d9843519266517109a1e0e80c56fe81",
        sha256:
          "fa951a4615d24f5b5bfcc9164dd9378338a3105364b6484f64cf2994757921d1",
      },
      dob: { date: "1981-08-27T01:58:46.662Z", age: 41 },
      registered: { date: "2017-02-05T05:40:29.708Z", age: 6 },
      phone: "06-5156-8654",
      cell: "0485-574-104",
      id: { name: "TFN", value: "425077103" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/24.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
      },
      nat: "AU",
    },
    {
      gender: "female",
      name: { title: "Miss", first: "Zlata", last: "Radovanović" },
      location: {
        street: { number: 9185, name: "Omorika" },
        city: "Srbobran",
        state: "Pomoravlje",
        country: "Serbia",
        postcode: 55752,
        coordinates: { latitude: "43.1508", longitude: "-140.1966" },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "zlata.radovanovic@example.com",
      login: {
        uuid: "c5815641-9f5b-442d-bddd-d680c850b317",
        username: "smallfrog808",
        password: "april",
        salt: "OB3Kv3l0",
        md5: "290627b40d4740310aa213b62ca2bde4",
        sha1: "37fbd9b886f167f128cba74331170108bdebfe92",
        sha256:
          "ea9f1e411d4e57465ab56566405c49ecdd1f2d37d1b8273f3589986e689fbc71",
      },
      dob: { date: "1961-11-08T12:08:40.460Z", age: 61 },
      registered: { date: "2019-09-05T11:06:51.102Z", age: 3 },
      phone: "018-6934-496",
      cell: "062-3054-464",
      id: { name: "SID", value: "369699087" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/92.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg",
      },
      nat: "RS",
    },
  ]);

  return (
    <>
      <h1>hola mundo</h1>

      <h5 className="mt-5 grid place-content-center">Lista de clientes</h5>
      <div className="w-full grid place-content-center">
        {Clientes.map((cliente) => (
          <div
            key={cliente.location.postcode}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            {/* IMAGEN */}
            <img
              className="w-full"
              alt={cliente.name.first}
              src={cliente.picture.large}
            />
            <div className="px-6 py-4">
              {/* NOMBRE */}
              <div className="font-bold text-xl text-center mb-2">
                {cliente.name.first} {cliente.name.last}
              </div>
            </div>
            <div class="mb-8">
              <p class="text-sm text-white flex items-center">
                <svg
                  class="fill-current text-white w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                {cliente.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
