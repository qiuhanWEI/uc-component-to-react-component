import React from "react";
import { Loading, Tip, Button, Notice } from "uc_components";

const { Radio } = Button;

export default ({ loading }) => (
  <Loading loading={loading}>
    {/* <Notice type="red" message={"message"} />
    <Notice type={"red"} message={<div>adfasdf</div>}></Notice> */}
    <Tip t_zIndex={12001} t_title="tip">
    <Button.Radio>
        {[1, 2].map((i) => (
          <Button
            key={i}
            type="border"
            onClick={() => {
              console.log("clicked");
            }}
          ></Button>
        ))}
      </Button.Radio>
      <Radio>
        {[1, 2].map((i) => (
          <Button
            key={i}
            type="border"
            onClick={() => {
              console.log("clicked");
            }}
          ></Button>
        ))}
      </Radio>
    </Tip>
  </Loading>
);
