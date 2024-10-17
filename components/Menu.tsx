import {
  CircleCheckBig,
  Image,
  LucideIcon,
  MessageCircle,
  Volume2,
} from "lucide-preact";
import Icon from "./Icon.tsx";

interface Props {
  pathName: string;
}

interface SubCategory {
  heading: string;
  slug: string;
}

interface Category {
  heading: string;
  slug: string;
  icon: LucideIcon;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  {
    heading: "Audio",
    slug: "/audio",
    icon: Volume2,
    subCategories: [
      {
        heading: "Create speech",
        slug: "/audio/create-speech",
      },
      {
        heading: "Create transcription",
        slug: "/audio/create-transcription",
      },
      {
        heading: "Create translate",
        slug: "/audio/create-translate",
      },
    ],
  },
  {
    heading: "Chat",
    slug: "/chat",
    icon: MessageCircle,
    subCategories: [
      {
        heading: "Create chat completion",
        slug: "/chat/create-chat-completion",
      },
    ],
  },
  {
    heading: "Images",
    slug: "/images",
    icon: Image,
    subCategories: [
      {
        heading: "Create image",
        slug: "/images/create-image",
      },
      {
        heading: "Create image edit",
        slug: "/images/create-image-edit",
      },
      {
        heading: "Create image variation",
        slug: "/images/create-image-variation",
      },
    ],
  },
  {
    heading: "Moderations",
    slug: "/moderations",
    icon: CircleCheckBig,
    subCategories: [
      {
        heading: "Create moderation",
        slug: "/moderations/create-moderation",
      },
    ],
  },
];

export default function Menu(props: Props) {
  const isActive = (path: string) => props.pathName.startsWith(path);

  return (
    <nav class="flex flex-col gap-7 text-slate-100">
      {categories.map((category) => (
        <div>
          <a
            class={`flex gap-2.5 items-center ${
              isActive(category.slug) && "text-lime-400"
            }`}
            href={category.subCategories[0].slug}
          >
            <Icon Icon={category.icon} size={23} />
            <div class="font-semibold text-lg">{category.heading}</div>
          </a>
          <div class="ml-11 mt-2.5 text-slate-300">
            {category.subCategories.map((subCategory) => (
              <a
                href={subCategory.slug}
                class={`leading-[29px] block ${
                  isActive(subCategory.slug) && "text-lime-400"
                }`}
              >
                {subCategory.heading}
              </a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
