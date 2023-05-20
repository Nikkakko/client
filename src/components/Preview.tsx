import React from 'react';
import { useDataStore } from '../app/store';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styled from 'styled-components';

const Preview = () => {
  const { selectedData } = useDataStore();
  return (
    <Container>
      {!selectedData.content && (
        <span>No content found. Please select a file from the left panel.</span>
      )}

      <ContentWrapper>
        {selectedData.content && (
          <MarkdownContainer children={selectedData.content} />
        )}
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  /* color: #fff; */
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

const MarkdownContainer = styled(ReactMarkdown)`
  h1 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;

    /* 100 */

    color: #ffffff;
  }

  p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    /* 400 */

    color: #c1c4cb;
    margin-top: 22px;
  }

  h2 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 37px;
    /* identical to box height */

    /* 100 */

    color: #ffffff;

    margin-top: 20px;
  }

  li {
    margin-left: 24px;

    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: #c1c4cb;
  }

  ul {
    //change dot color
    li::marker {
      color: #e46643;
    }
  }

  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height */

    /* 100 */

    color: #ffffff;
    margin-top: 20px;
  }

  blockquote {
    /* Your styles for blockquotes */
    margin-top: 20px;
    padding: 24px;
    background: #2b2d31;
    border-radius: 4px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #e46643;
      border-radius: 4px 0px 0px 4px;
    }

    p {
      margin: 0;
      color: #fff;
    }

    a {
      color: #fff;
    }

    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
  }

  h4 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;

    margin-top: 20px;

    /* 100 */

    color: #ffffff;
  }

  h5 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    /* 100 */

    color: #ffffff;
    margin-top: 20px;
  }

  h6 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-top: 20px;

    /* Orange */

    color: #e46643;
  }

  //last child of code block

  pre {
    background: #2b2d31;
    border-radius: 4px;
    padding: 24px;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    /* 100 */

    color: #ffffff;
    margin-top: 20px;
  }
`;

export default Preview;
