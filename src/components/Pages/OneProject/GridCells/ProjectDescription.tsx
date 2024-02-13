import { CardContainer } from "@styles/components/Container";
import Link from "next/link";
import styled from "styled-components";

type SocialLinksProps = {
  socialLinks: {
    github?: string;
    linkedin?: string;
    website?: string;
    twitter?: string;
    instagram?: string;
    discord?: string;
  };
};

export const ProjectDescription: React.FC<SocialLinksProps> = ({
  socialLinks,
}) => {
  return (
    <ProjectDescriptionContainer className="ProjectDescription">
      <p className="card-title">A propos</p>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        officiis accusantium qui consequuntur molestiae vero ipsum nostrum porro
        tenetur, magni labore odio enim quam consequatur beatae molestias
        perferendis libero possimus.
      </p>
      <SocialIconContainer>
        {socialLinks.github && (
          <Link
            className="icon github--icon"
            href={socialLinks.github}
            target="_blank"
          >
            <i className="ri-github-fill"></i>
          </Link>
        )}
        {socialLinks.linkedin && (
          <Link
            className="icon linkedin--icon"
            href={socialLinks.linkedin}
            target="_blank"
          >
            <i className="ri-linkedin-fill"></i>
          </Link>
        )}
        {socialLinks.website && (
          <Link
            className="icon website--icon"
            href={socialLinks.website}
            target="_blank"
          >
            <i className="ri-global-fill"></i>
          </Link>
        )}
        {socialLinks.twitter && (
          <Link
            className="icon twitter--icon"
            href={socialLinks.twitter}
            target="_blank"
          >
            <i className="ri-twitter-fill"></i>
          </Link>
        )}
        {socialLinks.instagram && (
          <Link
            className="icon instagram--icon"
            href={socialLinks.instagram}
            target="_blank"
          >
            <i className="ri-instagram-fill"></i>
          </Link>
        )}
        {socialLinks.discord && (
          <Link
            className="icon discord--icon"
            href={socialLinks.discord}
            target="_blank"
          >
            <i className="ri-discord-fill"></i>
          </Link>
        )}
      </SocialIconContainer>
    </ProjectDescriptionContainer>
  );
};

const ProjectDescriptionContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;

  & > p.card-title {
    text-align: left;
  }

  & > p.description {
    margin-bottom: auto;
  }
`;

const SocialIconContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
  gap: 8px;

  a {
    color: var(--text-color);
    font-size: 24px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
