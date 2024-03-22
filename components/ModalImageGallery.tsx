import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";

//#region type

interface ModalProps {
  showModal: boolean;
  onClose?: () => void;
  modalSize?: "sm" | "md" | "lg" | "xl";
  images?: string[];
  title?: string | ReactElement;
  body?: ReactElement;
}

//#endregion

export const ModalImageGallery: FunctionComponent<ModalProps> = ({
  modalSize = "xl",
  images = [],
  ...props
}: ModalProps) => {
  //#region  state

  const [activeIndex, setActiveIndex] = useState(0);

  //#endregion

  //#region function

  const handleNextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [activeIndex]);

  if (!props.showModal) return null;

  //#endregion

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-70"
        onClick={props.onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg relative w-full max-w-4xl p-5">
        <button
          className="absolute top-0 right-0 m-4 text-gray-950 text-2xl z-50"
          onClick={props.onClose}
        >
          &times;
        </button>
        <div className="relative overflow-hidden">
          <img
            src={images[activeIndex]}
            alt={`Image ${activeIndex + 1}`}
            className="w-full h-auto"
            style={{ maxHeight: "90vh" }}
          />
          {images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-50 bg-white rounded-full p-2 border border-orange-300"
                onClick={handlePrevImage}
                style={{ left: "10px" }}
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0893 16.4228C10.7639 16.7483 10.2362 16.7483 9.91079 16.4228L4.07745 10.5895C3.75202 10.264 3.75202 9.73634 4.07745 9.41091L9.91079 3.57757C10.2362 3.25214 10.7639 3.25214 11.0893 3.57757C11.4147 3.903 11.4147 4.43064 11.0893 4.75608L6.67852 9.16683H16.3334C16.7936 9.16683 17.1667 9.53993 17.1667 10.0002C17.1667 10.4604 16.7936 10.8335 16.3334 10.8335H6.67852L11.0893 15.2442C11.4147 15.5697 11.4147 16.0973 11.0893 16.4228Z"
                    fill="#F28705"
                  />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50 bg-white rounded-full p-2 border border-orange-300"
                onClick={handleNextImage}
                style={{ right: "10px" }}
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.91066 3.57757C10.2361 3.25214 10.7637 3.25214 11.0892 3.57757L16.9225 9.41091C17.2479 9.73634 17.2479 10.264 16.9225 10.5894L11.0892 16.4228C10.7637 16.7482 10.2361 16.7482 9.91066 16.4228C9.58523 16.0973 9.58523 15.5697 9.91066 15.2442L14.3214 10.8335H4.66659C4.20635 10.8335 3.83325 10.4604 3.83325 10.0002C3.83325 9.53993 4.20635 9.16683 4.66659 9.16683H14.3214L9.91066 4.75609C9.58523 4.43065 9.58523 3.90301 9.91066 3.57757Z"
                    fill="#F28705"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
