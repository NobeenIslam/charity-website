import { EngagementBanner as SanityEngagementBannerType } from '@/utilities/schemaTypes';

export const engagementBannerMock: SanityEngagementBannerType = {
  _type: "engagementBanner",
  body: [
    {
      _key: "78dc429635b3",
      _type: "block",
      children: [
        {
          _key: "7be72e76c35d0",
          _type: "span",
          marks: [],
          text: "We are here to help you. Don't hesitate to contact us for any assistance or inquiries. We value your communication and are ready to serve.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  heading: "Reach Out to Us Today for Any Assistance Needed",
};
