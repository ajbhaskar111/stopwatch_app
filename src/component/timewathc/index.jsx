import React, { useState, useEffect } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startPause = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const stop = () => {
    setIsRunning(false);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center my-3 text-uppercase text-success">
          Stop Watch Timer
        </h1>
        <div className="card my-5">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-8 col-md-10 col-sm-12 offset-lg-2">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row ">
                      <div className="col-3">
                        <h3 className="card-title text-center">
                          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                        </h3>
                      </div>
                      <div className="col-1">
                        <h3 className="card-title">:</h3>
                      </div>
                      <div className="col-3">
                        <h3 className="card-title text-center">
                          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                        </h3>
                      </div>
                      <div className="col-1">
                        <h3 className="card-title">:</h3>
                      </div>
                      <div className="col-3">
                        <h3 className="card-title text-center">
                          {("0" + ((time / 10) % 100)).slice(-2)}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8  col-md-12 col-sm-12 offset-lg-2">
            <div className="row">
              <div className="col-lg-12 col-md-12  col-sm-12">
                <div className="row">
                  <div className="col-4">
                    <button
                      className="btn btn-primary w-100"
                      onClick={startPause}
                    >
                      {isRunning ? "Pause" : "Start"}
                    </button>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-info w-100" onClick={reset}>
                      Reset
                    </button>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-danger w-100" onClick={stop}>
                      stop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
