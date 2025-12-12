import svgPaths from "./svg-r255uwydzq";
import imgEllipse13 from "figma:asset/b98188831a3933f358c227a30dc107a47f833da6.png";
import imgGroup11 from "figma:asset/df73b7b3c0298cb52210faaa9b1d7bba265a447b.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute size-[23px] top-[151px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        {children}
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-[25px] size-[60px] top-[13px]">
      <img alt="" className="block max-w-none size-full" height="60" src={imgEllipse13} width="60" />
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="content-stretch flex gap-[3px] items-end leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium relative shrink-0 text-[#264456] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#1d1c22] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[9px] items-center leading-[normal] relative shrink-0 text-[16px] w-[76px]">
      <p className="relative shrink-0 text-[#1d1c22] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <p className="relative shrink-0 text-[rgba(29,28,34,0.5)] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start leading-[normal] relative shrink-0 w-[112px]">
      <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium relative shrink-0 text-[#264456] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#1d1c22] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type Group10Vector1Props = {
  additionalClassNames?: string;
};

function Group10Vector1({ additionalClassNames = "" }: Group10Vector1Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path clipRule="evenodd" d={svgPaths.p1a64100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
    </Wrapper>
  );
}
type Group10VectorProps = {
  additionalClassNames?: string;
};

function Group10Vector({ additionalClassNames = "" }: Group10VectorProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path clipRule="evenodd" d={svgPaths.p1a64100} fill="var(--fill-0, #FF7034)" fillRule="evenodd" id="Vector" />
    </Wrapper>
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

function Frame2() {
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
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#ff7034] content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] pb-[16px] pt-[14px] px-[14px] rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)] top-[903px] translate-x-[-50%] w-[239px]">
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

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] pb-[16px] pt-[14px] px-[14px] rounded-[6px] top-[743px] translate-x-[-50%]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_6.9px_0px_rgba(0,0,0,0.25)]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e5ebf0] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search Lawyers Manually
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-1/2 top-[151px] translate-x-[-50%]">
      <div className="absolute bg-white h-[9px] left-[calc(50%+6.5px)] rounded-[56px] top-[158px] translate-x-[-50%] w-[1137px]" />
      <div className="absolute bg-[#ff7034] h-[9px] left-[calc(50%-474px)] rounded-[56px] top-[158px] translate-x-[-50%] w-[146px]" />
      <div className="absolute bg-[#ff7034] h-[9px] left-[calc(50%-314px)] rounded-[56px] top-[158px] translate-x-[-50%] w-[146px]" />
      <div className="absolute bg-[#ff7034] h-[9px] left-[calc(50%-156px)] rounded-[56px] top-[158px] translate-x-[-50%] w-[146px]" />
      <div className="absolute bg-[#ff7034] h-[9px] left-[calc(50%+4px)] rounded-[56px] top-[158px] translate-x-[-50%] w-[146px]" />
      <Group10Vector additionalClassNames="left-[154px]" />
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
      <div className="absolute bg-[#ff7034] h-[9px] left-[calc(50%+164px)] rounded-[56px] top-[158px] translate-x-[-50%] w-[146px]" />
      <Group10Vector additionalClassNames="left-[953px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[911px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lawyer Selection
      </p>
      <Group10Vector1 additionalClassNames="left-[1113px]" />
      <Group10Vector1 additionalClassNames="left-[1272px]" />
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[1097px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Payment
      </p>
      <p className="absolute capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[1243px] text-[#e5ebf0] text-[14px] text-nowrap top-[180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirmation
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[105px] top-[18px] w-[364px]">
      <Helper text="Jonas Smith" text1="Divorce Law" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[393px] top-[20px] w-[422px]">
      <Helper1 text="Affordable" text1="$250" />
      <Helper2 text="90%" text1="success rate" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#d0eae6] h-[85px] overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Image />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[105px] top-[18px] w-[364px]">
      <Helper text="Jonas Smith" text1="Divorce Law" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[393px] top-[20px] w-[422px]">
      <Helper1 text="Affordable" text1="$250" />
      <Helper2 text="90%" text1="success rate" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[85px] overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Image />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[292px] top-[450px] w-[862px]">
      <Frame4 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame11 key={i} />
      ))}
    </div>
  );
}

export default function LawyerSelection() {
  return (
    <div className="bg-gradient-to-b from-[#325368] relative size-full to-[#1e3a4a]" data-name="lawyer-selection">
      <div className="absolute h-[60px] left-[143px] top-[39px] w-[92px]" data-name="Group 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup11} />
      </div>
      <Frame />
      <p className="absolute capitalize font-['Roboto_Serif:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-428px)] text-[48px] text-nowrap text-white top-[302px] whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        We Found the best Lawyers for you
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-168px)] text-[18px] text-nowrap text-white top-[386px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select a lawyer to get started on your case
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-291px)] text-[18px] text-nowrap text-white top-[812px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your information is encrypted and only shared with your assigned lawyer.
      </p>
      <Frame3 />
      <Frame5 />
      <Group1 />
      <Frame8 />
    </div>
  );
}