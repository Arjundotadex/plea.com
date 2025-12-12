import svgPaths from "./svg-fp8q23hit9";
import clsx from "clsx";
import imgGroup11 from "figma:asset/df73b7b3c0298cb52210faaa9b1d7bba265a447b.png";
type Group10VectorProps = {
  additionalClassNames?: string;
};

function Group10Vector({ additionalClassNames = "" }: Group10VectorProps) {
  return (
    <div className={clsx("absolute size-[23px] top-[151px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <path clipRule="evenodd" d={svgPaths.p1a64100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#e5ebf0] content-stretch flex items-center justify-center px-[14px] py-[10px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b6b6b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p23f83f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[9px] items-end px-[22px] py-[12px] relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Get the App
      </p>
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ff7034] content-stretch flex items-center justify-center px-[22px] py-[12px] relative rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] shrink-0">
      <p className="font-['Roboto_Serif:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e5ebf0] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Track your status
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[377px] top-[59px] w-[921px]">
      <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        How it Works
      </p>
      <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Case Types
      </p>
      <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Why Us
      </p>
      <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Join as a Lawyer
      </p>
      <Frame4 />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#e5ebf0] h-[54px] left-[calc(50%+1.39px)] overflow-clip rounded-[43px] top-[401px] translate-x-[-50%] w-[636.784px]">
      <div className="absolute h-[28px] left-[31.39px] top-[13px] w-[27.547px]" data-name="Vector">
        <div className="absolute bottom-[2.54%] left-0 right-[2.44%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 28">
            <path d={svgPaths.p10ceb340} fill="var(--fill-0, #325368)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[81.94px] text-[#325368] text-[18px] top-[16.5px] w-[62.236px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Divorce
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#d0eae6] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ff7034] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#325367] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Divorce
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[calc(50%+1.5px)] top-[526px] translate-x-[-50%] w-[637px]">
      <Frame3 />
      <Text text="Property Dispute" additionalClassNames="rounded-[41px]" />
      <Text text="Fraud" additionalClassNames="rounded-[35px]" />
      <Text text="Cyber Crime" additionalClassNames="rounded-[35px]" />
      <Text text="Employment" additionalClassNames="rounded-[41px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[calc(50%-101.5px)] top-[590px] translate-x-[-50%] w-[431px]">
      <Text text="Employment" additionalClassNames="rounded-[41px]" />
      <Text text="Tenant/Landlord" additionalClassNames="rounded-[35px]" />
      <Text text="Cyber Crime" additionalClassNames="rounded-[35px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#ff7034] content-stretch flex gap-[8px] h-[53px] items-center justify-center left-[801px] pb-[16px] pt-[14px] px-[14px] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] top-[699px] w-[239px]">
      <p className="font-['Roboto_Serif:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e5ebf0] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Continue
      </p>
      <div className="h-0 relative shrink-0 w-[23.513px]">
        <div className="absolute inset-[-7.36px_-4.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 15">
            <path d={svgPaths.p39cb0dc0} fill="var(--stroke-0, white)" id="Arrow 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-1/2 top-[151px] translate-x-[-50%]">
      <div className="absolute bg-white h-[9px] left-[calc(50%+6.5px)] rounded-[56px] top-[158px] translate-x-[-50%] w-[1137px]" />
      <div className="absolute left-[154px] size-[23px] top-[151px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <path clipRule="evenodd" d={svgPaths.p1a64100} fill="var(--fill-0, #FF7034)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[165.5px] text-[#e5ebf0] text-[14px] text-center top-[180px] translate-x-[-50%] w-[101px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirm your case type
      </p>
      <Group10Vector additionalClassNames="left-[315px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[326.5px] text-[#e5ebf0] text-[14px] text-center top-[180px] translate-x-[-50%] w-[83px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Describe Your Issue
      </p>
      <Group10Vector additionalClassNames="left-[472px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[424px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upload Documents
      </p>
      <Group10Vector additionalClassNames="left-[632px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[600px] text-[#e5ebf0] text-[14px] top-[180px] w-[87px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Case Urgency
      </p>
      <Group10Vector additionalClassNames="left-[793px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[759px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Account Setup
      </p>
      <Group10Vector additionalClassNames="left-[953px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[911px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lawyer Selection
      </p>
      <Group10Vector additionalClassNames="left-[1113px]" />
      <Group10Vector additionalClassNames="left-[1272px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[1097px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Payment
      </p>
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[1243px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirmation
      </p>
    </div>
  );
}

export default function ConfirmYourCaseType() {
  return (
    <div className="bg-gradient-to-b from-[#325368] relative size-full to-[#1e3a4a]" data-name="Confirm-your-case-type">
      <div className="absolute h-[60px] left-[143px] top-[39px] w-[92px]" data-name="Group 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup11} />
      </div>
      <Frame />
      <p className="absolute capitalize font-['Roboto_Serif:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-293px)] text-[48px] text-white top-[297px] w-[587px]" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Confirm your case type
      </p>
      <Frame2 />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-192px)] text-[18px] text-nowrap text-white top-[482px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose the option that matches best your issue
      </p>
      <Frame6 />
      <Frame5 />
      <Frame7 />
      <p className="absolute font-['Roboto_Serif:Medium',sans-serif] font-medium leading-[normal] left-[711px] text-[16px] text-white top-[767px] w-[422px]" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Takes less than 1 minute. No commitment required.
      </p>
      <Group1 />
    </div>
  );
}