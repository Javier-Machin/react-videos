import React from "react";
import { create } from "react-test-renderer";
import VideoItem from "../VideoItem";

describe("VideoItem", () => {
  // API data mockup
  test("it changes video selected when clicked", () => {
    const video = {
      snippet: {
        title: "video title",
        thumbnails: {
          medium: {
            url: "dummyURL"
          }
        }
      }
    };
    // onVideoSelect mock up
    const onVideoSelect = video => video;

    const component = create(<VideoItem key="1" video={video} onVideoSelect={onVideoSelect}/>);
    const rootInstance = component.root;
    const itemInstance = rootInstance.findByType("div");
  
    expect(itemInstance.props.onClick(video)).toEqual(video);
  });
});
