import React from "react";
import { Radio, Loading, Notice, Tooltip } from "react_components";

const { Group } = Radio;

export default ({ loading }) => (
  <Loading loading={loading}>
    <Notice styleType="error">{"message"}</Notice>
    <Notice styleType={"error"}>{<div>adfasdf</div>}</Notice>
    <Tooltip zIndex={12001} popup="tip" arrow={false}>
      <div>
        <Radio.Group styleType={"button"}>
            {[1, 2].map((i) => (
              <Radio
                key={i}
                type="border"
                onClick={() => {
                  console.log("clicked");
                }}
              ></Radio>
            ))}
          </Radio.Group>
        <Group styleType={"button"}>
          {[1, 2].map((i) => (
            <Radio
              key={i}
              type="border"
              onClick={() => {
                console.log("clicked");
              }}
            ></Radio>
          ))}
        </Group>
      </div>
    </Tooltip>
  </Loading>
);
