/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />

class MyInstrument extends BaseInstrument {
  // Note that this class contains the property templateID,
  // which returns a string.This property must be provided and
  // the returned string must match the name of your instrument
  // template you provided in the HTML, in this case MyInstrument.
  get templateID(): string {
    return "MyInstrument";
  }
}

registerInstrument("my-instrument", MyInstrument);
