import { useEffect } from "react";

const useOneSignal = () =>
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "e83d939e-8270-4831-8452-ae50ab8d7d92",

      safari_web_id: "web.onesignal.auto.650c091f-37ea-4fe0-8793-2961481353d2",
        notifyButton: {
          enable: true,
        },

        promptOptions: {
            slidedown: {
              prompts: [
                {
                  type: "push", // current types are "push" & "category"
                  autoPrompt: true,
                  text: {
                    /* limited to 90 characters */
                    actionMessage: "We'd like to show you notifications for the latest news and updates.",
                    /* acceptButton limited to 15 characters */
                    acceptButton: "Allow",
                    /* cancelButton limited to 15 characters */
                    cancelButton: "Cancel"
                  },
                  delay: {
                    pageViews: 1,
                    timeDelay: 20
                  }
                }
              ]
            }
          },
        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount

export default useOneSignal;