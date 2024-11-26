import React, { useState } from "react";
// import "gantt-task-react/dist/index.css";
// import { ViewMode } from "gantt-task-react";
import "../../index.css";
import { ViewMode } from "../../types/public-types";

type ViewSwitcherProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
}) => {
  const [selectedViewMode, setSelectedViewMode] = useState("");

  return (
    <div className="ViewContainer">
      <button
        className="Button"
        //modification

        style={{
          backgroundColor:
            selectedViewMode === "Hour" ? "rgba(128, 0, 128, 0.263)" : "",
        }}
        onClick={() => {
          onViewModeChange(ViewMode.Hour);
          setSelectedViewMode(ViewMode.Hour);
        }}
      >
        Hour
      </button>
      <button
        className="Button"
        // onClick={() => onViewModeChange(ViewMode.QuarterDay)}

        // modification

        onClick={() => {
          onViewModeChange(ViewMode.QuarterDay);
          setSelectedViewMode(ViewMode.QuarterDay);
        }}
        style={{
          backgroundColor:
            selectedViewMode === "Quarter Day"
              ? "rgba(128, 0, 128, 0.263)"
              : "",
        }}
      >
        Quarter of Day
      </button>
      <button
        className="Button"
        // onClick={() => onViewModeChange(ViewMode.HalfDay)}

        // modification

        onClick={() => {
          onViewModeChange(ViewMode.HalfDay);
          setSelectedViewMode(ViewMode.HalfDay);
        }}
        style={{
          backgroundColor:
            selectedViewMode === "Half Day" ? "rgba(128, 0, 128, 0.263)" : "",
        }}
      >
        Half of Day
      </button>
      <button
        className="Button"
        //  onClick={() => onViewModeChange(ViewMode.Day)}

        // modification

        onClick={() => {
          onViewModeChange(ViewMode.Day);
          setSelectedViewMode(ViewMode.Day);
        }}
        style={{
          backgroundColor:
            selectedViewMode === "Day" ? "rgba(128, 0, 128, 0.263)" : "",
        }}
      >
        Day
      </button>
      <button
        className="Button"
        // onClick={() => onViewModeChange(ViewMode.Week)}

        // modification

        onClick={() => {
          onViewModeChange(ViewMode.Week);
          setSelectedViewMode(ViewMode.Week);
        }}
        style={{
          backgroundColor:
            selectedViewMode === "Week" ? "rgba(128, 0, 128, 0.263)" : "",
        }}
      >
        Week
      </button>
      <button
        className="Button"
        // onClick={() => onViewModeChange(ViewMode.Month)}

        // modification

        onClick={() => {
          onViewModeChange(ViewMode.Month);
          setSelectedViewMode(ViewMode.Month);
        }}
        style={{
          backgroundColor:
            selectedViewMode === "Month" ? "rgba(128, 0, 128, 0.263)" : "",
        }}
      >
        Month
      </button>
      <button
        className="Button"
        // onClick={() => onViewModeChange(ViewMode.Year)}

        // modification

        onClick={() => {
          onViewModeChange(ViewMode.Year);
          setSelectedViewMode(ViewMode.Year);
        }}
        style={{
          backgroundColor:
            selectedViewMode === "Year" ? "rgba(128, 0, 128, 0.263)" : "",
        }}
      >
        Year
      </button>
      <button
        className="Button"
        // onClick={() => onViewModeChange(ViewMode.QuarterYear)}

        // modification

        onClick={() => {
          onViewModeChange(ViewMode.QuarterYear);
          setSelectedViewMode(ViewMode.QuarterYear);
        }}
        style={{
          backgroundColor:
            selectedViewMode === "QuarterYear"
              ? "rgba(128, 0, 128, 0.263)"
              : "",
        }}
      >
        Quater of Year
      </button>
      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div>
    </div>
  );
};
