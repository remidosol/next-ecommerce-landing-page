import { ProductCardData } from "./types/ProductCard";
import { TestimonalCardData } from "./types/TestimonalCard";

export const productList: ProductCardData[] = [
  {
    title: "Title",
    description: "Description",
    header: {
      headerImageSrc:
        "https://s3-alpha-sig.figma.com/img/dca1/86a5/0d88eb3d3af7ffd32f03165632eb5422?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh1Hmr9vrmUEXaAqqgNsdxIngknZNdK9tJvlS5si3ive5wBmHq2MuDje0FwP7e-ZCKqAtDNNkJ8NHo~S87Riif9dXun0yV-IHG9RrC9-ExmdUmtm31Wp9pBBcr7cyB1N~fiiS8tQIka4Jc~te-sUiyVl8j94VFaRJ1wB2-AWngNGTQHrXf-mEbHmX7ZeTddS2ueAt9a6dY4oHynFRv~FjBVz0iE6~BdJReEOi4xR932n96~X3tHV08dsfTSePdtlC~xFeowcWupuaj6NH7JGRCKqpGUxVg1EChMXD-LRNVGHLU07zuzIu3WR1H-Ez21uHDviRCF1~rrCtV3KyiHx4A__",
      headerImageAlt: "Snicker 1",
    },
  },
  {
    title: "Title",
    description: "Description",
    header: {
      headerImageSrc:
        "https://s3-alpha-sig.figma.com/img/1c58/67c1/ae5c8652360f15ed8928bae486c8af2a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foWG2S5G9ojY6Mu5W-n1dKbb0YHwwfbqGI5bdPkQES8uunEJXQAWEnmYJuavf1yu5TuWJHFKCd4D55KVuOPbC7nQRe0Gw-6EAulkf5c6plT-4KS-jC3LglUNzgcI4-iyzOCLMogw5FFNIEZdM-3dr6kg1p9tttojtoMI54fy7rV8LAgaMJcqfqdyJSzZ8T8BTMI51np~NL170MNVj4DSLGtTPQpoPCw4-wzQ4X~-pxcmqHQ4UldnVNjHkPgQ8SRFN61BX9iwm70z0Qrts1x0rJyGw0d-t83z-f1RAdh5Siyl9mwrnCD9VYh2ULiHY~wzUK0B22OkbaPmmNy2dEMlqw__",
      headerImageAlt: "Snicker 2",
    },
  },
  {
    title: "Title",
    description: "Description",
    header: {
      headerImageSrc:
        "https://s3-alpha-sig.figma.com/img/c5b9/139c/f57074dcff92be506ebd3ca26296b822?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYUP9D-3KyP1jazXyXJ8k289bAeaB7diHzt66uBtCzoahZdjxQhevQf7ivjMhmLEF84gQuhbYFLBWSXQwhIzVOH9B6jflB4hhZNbWedyoGd~eNa7M~Dy15UBL9F090HiSGTEegZ78R~5xFZW-YlgIxgV-PTnr3hpv1-CoZuilWbAmlTESrts-W1UfgbTgtQdJWkY7P~LQdNTLIe4zPiEDfa5UJHW~DiUGn76HI-~v64HHfvcgq~huFMDPemgE4ccqlzC1aUS0aH1l4irei4-Y4vtygqzzj5xGm4KabkfabeZ673hM5V8DkqSfiW8zavuunbljsk9yc-~Eg1NnLH34Q__",
      headerImageAlt: "Snicker 3",
    },
  },
];

export const whyJoinUsSentences: string[] = [
  "Est et in pharetra magna adipiscing ornare aliquam.",
  "Tellus arcu sed consequat ac velit ut eu blandit.",
  "Ullamcorper ornare in et egestas dolor orci.",
];

export const testimonials: TestimonalCardData[] = [
  {
    header: {
      headerVisual: (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16343 0 0 7.16345 0 16C0 24.8366 7.16343 32 16 32ZM20.9915 7.45348C21.2344 6.59044 20.3969 6.08011 19.632 6.62504L8.9545 14.2317C8.12498 14.8226 8.25546 16 9.1505 16H11.9622V15.9782H17.442L12.977 17.5537L11.0086 24.5466C10.7656 25.4096 11.6031 25.9199 12.368 25.375L23.0455 17.7684C23.8751 17.1774 23.7445 16 22.8496 16H18.5857L20.9915 7.45348Z'
            fill='#475569'
          />
        </svg>
      ),
      headerText: "Zoomerr",
    },
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    testimonalOwner: {
      avatar: {
        avatarSrc:
          "https://s3-alpha-sig.figma.com/img/4968/5ac7/b81e766e223bcb38bd406643740bb4b1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fASoRSGCi9Du38lIkIfTXvAKT~zCQksWHjMmGsaaQl593Qy4AwydPi2cQ8oa0aeV9m5FloZWiPig~BJhf4567z2HnGuds8h5DJjF0MxMIEswoBuO8l5z03mxziA9SPzXFQv4u~Hjh2z8eum0MsAeSY710MQ34kyEjwOKqkSHyZa7EoXiXnly1z6BWPJ~0Mz0QSgQsWN5iJUJ8RQTdy1W431xhGmMdWh-o4w6Akpy~e-ikP337ok5qZ~VacRfJPWY9jt3PWU7fx9VrOhd6OorHXeTv-Q~y7tCOGxtEpLiNr1FPp9N5aaqyfPSs~yQGUekisArCuqckeh2ndTYiMed6Q__",
        avatarAlt: "Hellen Jummy Avatar",
      },
      fullName: "Hellen Jummy",
      position: "Team Lead",
    },
  },
  {
    header: {
      headerVisual: (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16343 0 0 7.16345 0 16C0 24.8366 7.16343 32 16 32ZM20.9915 7.45348C21.2344 6.59044 20.3969 6.08011 19.632 6.62504L8.9545 14.2317C8.12498 14.8226 8.25546 16 9.1505 16H11.9622V15.9782H17.442L12.977 17.5537L11.0086 24.5466C10.7656 25.4096 11.6031 25.9199 12.368 25.375L23.0455 17.7684C23.8751 17.1774 23.7445 16 22.8496 16H18.5857L20.9915 7.45348Z'
            fill='#475569'
          />
        </svg>
      ),
      headerText: "SHELLS",
    },
    description:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    testimonalOwner: {
      avatar: {
        avatarSrc:
          "https://s3-alpha-sig.figma.com/img/558c/b79e/f83fbd49cdf87134bb331c6a7d3a9eaa?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1TmulUFa7q9yBt4BEbhGc84yzjHePaL0rEuorGbirw0stdox2PmVhBfRJjBclGlo~IRCBPZDrEyRNnBXZQHNyoli5Llga79MgPRZao5-M2IfC1-v6ImyhSSfKJfZKPUISz1aWSVd7DP-xE87QaWdQa1gM8Bx1qdqYZ~~tFivHDpqTMD7GWRHOorzeOms3NiY~VH~kuDq2zikkZVy1dq9anePsmcad2eothhC~lMsOjwiMXb~ECCSSsdXTW8etXs-kXpldsDCThnybZdfgMUDRDOwpBLoy6WpyrnyWvL~poD24xcuZ5B1ipyqTIeMo9UzGcvsJvsWFYIFmnABOEQTw__",
        avatarAlt: "Hellena John Avatar",
      },
      fullName: "Hellena John",
      position: "Co-founder",
    },
  },
  {
    header: {
      headerVisual: (
        <svg width='56' height='32' viewBox='0 0 56 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M37.4078 32H50.3256L18.3257 0H5.40784L37.4078 32Z' fill='#475569' />
          <path
            d='M24.9622 1.63716e-06L55.8096 30.8474V0H47.4617V9.73909L37.7225 0L24.9622 1.63716e-06Z'
            fill='#475569'
          />
          <path d='M0 1.07129V31.9999H8.34782V22.2607L18.0869 31.9999H30.9287L0 1.07129Z' fill='#475569' />
        </svg>
      ),
      headerText: "ArtVenue",
    },
    description:
      "A eget sed posuere dui risus habitasse mauris. Venentis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    testimonalOwner: {
      avatar: {
        avatarSrc:
          "https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OljSbsgaD3A8B8MyNOyu6Krq3ufkneDvXPEdYY2--zniOETonIQ71vx7n4Bl-MS2gSHGiL61DI46q8ST5Qd~rawHBIebx3H3FoA1H9aoCUvtrPLa24tlYqH7zoGMandfXvEAAtNLIG7k4hfGc09A~VLo495W0U~iJ1sVpkM0o6DtgzNVFe7MMqwexbx7gj7syh0yU~tkwGAZZdA07yfju43PUuIxlgGZu3UDPNDbnaZBRmlTaUcjjzqB7AvkRpgNySWj1Bcol0P-9s1vfcfqdznkd3vdmMry2I4J5JoRtj7HxFyNGiIiS4suEcFztC2u3H6s-e4AQYKkjnendda8Ig__",
        avatarAlt: "David Oshodi Avatar",
      },
      fullName: "David Oshodi",
      position: "Manager",
    },
  },
  {
    header: {
      headerVisual: (
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16343 0 0 7.16345 0 16C0 24.8366 7.16343 32 16 32ZM20.9915 7.45348C21.2344 6.59044 20.3969 6.08011 19.632 6.62504L8.9545 14.2317C8.12498 14.8226 8.25546 16 9.1505 16H11.9622V15.9782H17.442L12.977 17.5537L11.0086 24.5466C10.7656 25.4096 11.6031 25.9199 12.368 25.375L23.0455 17.7684C23.8751 17.1774 23.7445 16 22.8496 16H18.5857L20.9915 7.45348Z'
            fill='#475569'
          />
        </svg>
      ),
      headerText: "ArtVenue",
    },
    description:
      "A eget sed posuere dui risus habitasse mauris. Venentis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    testimonalOwner: {
      avatar: {
        avatarSrc:
          "https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OljSbsgaD3A8B8MyNOyu6Krq3ufkneDvXPEdYY2--zniOETonIQ71vx7n4Bl-MS2gSHGiL61DI46q8ST5Qd~rawHBIebx3H3FoA1H9aoCUvtrPLa24tlYqH7zoGMandfXvEAAtNLIG7k4hfGc09A~VLo495W0U~iJ1sVpkM0o6DtgzNVFe7MMqwexbx7gj7syh0yU~tkwGAZZdA07yfju43PUuIxlgGZu3UDPNDbnaZBRmlTaUcjjzqB7AvkRpgNySWj1Bcol0P-9s1vfcfqdznkd3vdmMry2I4J5JoRtj7HxFyNGiIiS4suEcFztC2u3H6s-e4AQYKkjnendda8Ig__",
        avatarAlt: "David Oshodi Avatar",
      },
      fullName: "David Oshodi",
      position: "Manager",
    },
  },
  {
    header: {
      headerVisual: (
        <svg width='56' height='32' viewBox='0 0 56 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M37.4078 32H50.3256L18.3257 0H5.40784L37.4078 32Z' fill='#475569' />
          <path
            d='M24.9622 1.63716e-06L55.8096 30.8474V0H47.4617V9.73909L37.7225 0L24.9622 1.63716e-06Z'
            fill='#475569'
          />
          <path d='M0 1.07129V31.9999H8.34782V22.2607L18.0869 31.9999H30.9287L0 1.07129Z' fill='#475569' />
        </svg>
      ),
      headerText: "ArtVenue",
    },
    description:
      "A eget sed posuere dui risus habitasse mauris. Venentis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    testimonalOwner: {
      avatar: {
        avatarSrc:
          "https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OljSbsgaD3A8B8MyNOyu6Krq3ufkneDvXPEdYY2--zniOETonIQ71vx7n4Bl-MS2gSHGiL61DI46q8ST5Qd~rawHBIebx3H3FoA1H9aoCUvtrPLa24tlYqH7zoGMandfXvEAAtNLIG7k4hfGc09A~VLo495W0U~iJ1sVpkM0o6DtgzNVFe7MMqwexbx7gj7syh0yU~tkwGAZZdA07yfju43PUuIxlgGZu3UDPNDbnaZBRmlTaUcjjzqB7AvkRpgNySWj1Bcol0P-9s1vfcfqdznkd3vdmMry2I4J5JoRtj7HxFyNGiIiS4suEcFztC2u3H6s-e4AQYKkjnendda8Ig__",
        avatarAlt: "David Oshodi Avatar",
      },
      fullName: "David Oshodi",
      position: "Manager",
    },
  },
  {
    header: {
      headerVisual: (
        <svg width='56' height='32' viewBox='0 0 56 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M37.4078 32H50.3256L18.3257 0H5.40784L37.4078 32Z' fill='#475569' />
          <path
            d='M24.9622 1.63716e-06L55.8096 30.8474V0H47.4617V9.73909L37.7225 0L24.9622 1.63716e-06Z'
            fill='#475569'
          />
          <path d='M0 1.07129V31.9999H8.34782V22.2607L18.0869 31.9999H30.9287L0 1.07129Z' fill='#475569' />
        </svg>
      ),
      headerText: "ArtVenue",
    },
    description:
      "A eget sed posuere dui risus habitasse mauris. Venentis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    testimonalOwner: {
      avatar: {
        avatarSrc:
          "https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OljSbsgaD3A8B8MyNOyu6Krq3ufkneDvXPEdYY2--zniOETonIQ71vx7n4Bl-MS2gSHGiL61DI46q8ST5Qd~rawHBIebx3H3FoA1H9aoCUvtrPLa24tlYqH7zoGMandfXvEAAtNLIG7k4hfGc09A~VLo495W0U~iJ1sVpkM0o6DtgzNVFe7MMqwexbx7gj7syh0yU~tkwGAZZdA07yfju43PUuIxlgGZu3UDPNDbnaZBRmlTaUcjjzqB7AvkRpgNySWj1Bcol0P-9s1vfcfqdznkd3vdmMry2I4J5JoRtj7HxFyNGiIiS4suEcFztC2u3H6s-e4AQYKkjnendda8Ig__",
        avatarAlt: "David Oshodi Avatar",
      },
      fullName: "David Oshodi",
      position: "Manager",
    },
  },
];
