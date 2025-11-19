import React, { ReactElement } from "react";
import { Helmet } from "react-helmet-async";

interface Props {}
export default function MetaTags({}: Props): ReactElement {
  return (
    <Helmet>
      <title>Mohammad Maleh Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}
