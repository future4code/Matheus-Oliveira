import React from 'react';
import GlobalStyle from './themes/globalStyle'
import RenderPages from './render/RenderPages'

export default function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <RenderPages></RenderPages>
    </>
  )
}
