import { useCallback } from "react";
import { throttle } from "../../../helpers/helpers";
import useAxis from "../../../hooks/useAxis";
import useCssTransition from "../../../hooks/useCssTransition";
import Popup from "../../Popup/Popup";
import SearchContent from "./SearchContents/SearchContent";

const SearchInputPopup = ({ children, formRef, searchInput }) => {
  const { situation, close, open, toggle } = useCssTransition(400, "close");

  const togglePopup = useCallback(
    throttle(() => {
      open();
    }, 400),
    []
  );

  const { childrens, offset } = useAxis(children, {
    onFocus: togglePopup,
  });

  return (
    <>
      <Popup
        childRef={formRef}
        closePopup={close}
        exteraClass="p-[10px] left-[5px] right-[5px] md-not-first:!top-[60px] origin-top duration-[400ms] rounded-[10px] md:w-full overflow-y-auto min-h-[150px] max-h-[600px] overflow-y-auto"
        time={400}
        situation={situation}
        top={offset.y + 45}
        animations={{
          opening: "scale-y-0 opacity-0",
          closing: "scale-y-0 opacity-0",
          open: "scale-y-100",
        }}
      >
        <SearchContent text={searchInput} />
      </Popup>
      {childrens}
    </>
  );
};

export default SearchInputPopup;
