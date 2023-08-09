import "./Test.scss";
function Test() {
  return (
    <>
      <input type="checkbox" id="moreInfo" />

      <div class="mi-outer">
        <div class="mi">
          <div class="mi-flap2"></div>
          <label for="moreInfo" class="mi-flap1"></label>
          <div class="mi-flap5">
            <div class="mi-info"></div>
          </div>
          <div class="mi-flap4">
            <div class="mi-info">
              <label for="moreInfo" class="mi-close">
                X
              </label>
            </div>
          </div>
          <div class="mi-flap3">
            <div class="mi-info"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Test;
