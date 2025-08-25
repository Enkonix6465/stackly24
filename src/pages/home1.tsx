import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';

//  data for the e-commerce website
const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299.99",
    originalPrice: "$399.99",
    image: "/images/FP1.jpg",
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: "$199.99",
    originalPrice: "$249.99",
    image: "/images/FP2.jpg",
    rating: 4.6,
    reviews: 892
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: "$599.99",
    originalPrice: "$699.99",
    image: "/images/FP3.jpg",
    rating: 4.9,
    reviews: 2156
  },
  {
    id: 4,
    name: "Portable Speaker",
    price: "$89.99",
    originalPrice: "$129.99",
    image: "/images/FP4.jpg",
    rating: 4.5,
    reviews: 634
  }
];

const additionalProducts = [
  {
    id: 5,
    name: "Gaming Laptop",
    price: "$1,299.99",
    originalPrice: "$1,499.99",
    image: "/images/FP5.jpg",
    rating: 4.7,
    reviews: 2156
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: "$149.99",
    originalPrice: "$199.99",
    image: "/images/FP6.jpg",
    rating: 4.4,
    reviews: 892
  },
  {
    id: 7,
    name: "Smartphone",
    price: "$899.99",
    originalPrice: "$1,099.99",
    image: "/images/FP7.jpg",
    rating: 4.6,
    reviews: 1247
  },
  {
    id: 8,
    name: "4K Monitor",
    price: "$399.99",
    originalPrice: "$499.99",
    image: "/images/FP8.jpg",
    rating: 4.8,
    reviews: 2156
  }
];

const categories = [
  { name: "Electronics", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="#424242" d="M87.4 124H40.6c-4.7 0-8.6-3.8-8.6-8.6V12.6C32 7.9 35.9 4 40.6 4h46.8c4.7 0 8.6 3.8 8.6 8.6v102.9c0 4.7-3.9 8.5-8.6 8.5"></path><path d="M86.77 120.11H39.93c-2.15 0-3.89-1.74-3.89-3.89V19.65c0-2.14 1.74-3.88 3.88-3.88h48.15c2.15 0 3.89 1.74 3.89 3.89v95.93c0 .93-1.4 4.52-5.19 4.52"></path><path fill="#212121" d="M73.65 11.59h-19.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h19.1c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.1 1.2"></path><path fill="#757575" d="M87.4 6c3.64 0 6.6 2.96 6.6 6.6v102.9c0 3.58-2.96 6.5-6.6 6.5H40.6c-3.64 0-6.6-2.96-6.6-6.6V12.6C34 9.02 37.02 6 40.6 6zm0-2H40.6C35.9 4 32 7.9 32 12.6v102.8c0 4.8 3.9 8.6 8.6 8.6h46.8c4.7 0 8.6-3.8 8.6-8.5V12.6C96 7.8 92.1 4 87.4 4"></path><path fill="#eab56e" d="M48.35 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#fb8c00" d="M60.9 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#ff80ab" d="M73.45 29.96H67.1c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.33 1.32"></path><path fill="#0288d1" d="M86.01 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#00bfa5" d="M48.35 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#81d4fa" d="M60.9 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#fb8c00" d="M73.45 44.12H67.1c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.33 1.32"></path><path fill="#eab56e" d="M86.01 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#fb8c00" d="M48.35 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#ff80ab" d="M60.9 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#00bfa5" d="M73.45 58.28H67.1c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.33 1.32"></path><path fill="#0288d1" d="M86.01 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32M48.35 72.44h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32"></path><path fill="#81d4fa" d="M60.9 72.44h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32m-12.55 42.48h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32"></path><path fill="#0288d1" d="M60.9 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32"></path><path fill="#00bfa5" d="M73.45 114.92H67.1c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.33 1.32"></path><path fill="#ff80ab" d="M86.01 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32"></path></svg>, count: "2.5k+" },
  { name: "Fashion", icon:<svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="m29.696 12.33l-4.99-2.88c-.5-.29-1.07-.44-1.65-.44H8.936c-.317 0-.632.045-.934.133C6 9.73 4.09 11.295 2.296 12.33a.6.6 0 0 0-.22.81l2.79 4.83a.6.6 0 0 0 .81.22L8 16.848v12.398c0 .42.34.75.75.75h14.496c.42 0 .75-.34.75-.75v-12.39l2.3 1.334c.29.16.65.07.81-.22l2.79-4.83c.19-.28.09-.64-.2-.81"></path><path fill="#44911b" d="M11.484 9.01v.116c0 2.432 2.028 4.41 4.522 4.41s4.523-1.978 4.523-4.41V9.01z"></path><path fill="#c3ef3c" d="M24 16H8v3h16z"></path><path fill="#00d26a" d="M12.008 9.01c0 2.198 1.794 3.98 3.992 3.98s4-1.782 4-3.98h1.008c0 2.75-2.258 4.98-5.008 4.98s-5.008-2.23-5.008-4.98z"></path></g></svg>, count: "1.8k+" },
  { name: "Home & Garden", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="#ab5832" d="M19.16 48.94V28.58l-1.64.1V16.14l15.82-.1v12.35H31.7v11.96z"></path><path fill="#fff3e1" d="M64.11 23.33L18.67 68.99l.35 42.21l89.75-.85l.13-45z"></path><path fill="#5f4e47" d="m16.97 103.79l3.14-1.73V67.98l-2.92 1.95c-.01 0 .32 33.86-.22 33.86m90.23-33.97v32.03l3.14 1.73V71.01z"></path><path fill="#bcaa93" d="M64.42 28.21L17.18 72.42V61.27l47.29-44.79l45.87 47.5v9.41z"></path><path fill="#ab5832" d="m12.55 59.36l-2.77 5.11l7.43-.11s46.35-45.08 47.35-45.12c1.21-.05 45.76 45.91 45.76 45.91l6.59-.1l-49.44-53.26l-7.26-.48z"></path><path fill="#ed6c31" d="M4 63.19c-.78.95-.01 1.45.62 1.45s7.89-.21 7.89-.21l50.04-48.69s1.15-1.18 1.97-1.14c.89.04 2.04 1.17 2.04 1.17l50.28 49.29s5.73.02 6.64-.21c.99-.24.49-1.18-.73-2.49c-.9-.97-51.73-51.25-52.57-52.12c-2.5-2.58-3.72-4.08-6.08-3.98c-2.37.1-3.77 1.85-6.14 4.03c-.7.66-53.63 52.5-53.96 52.9"></path><path fill="#a6cfd5" d="M93.5 80.83h10.25V72.3a2.87 2.87 0 0 0-2.87-2.87H93.5zm-3.08 0v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87zm0 3.24H79.55v8a2.87 2.87 0 0 0 2.87 2.87h8zm3.08 0v10.87h7.38a2.87 2.87 0 0 0 2.87-2.87v-8zm-56.75-3.24H47V72.3a2.87 2.87 0 0 0-2.87-2.87h-7.38zm-3.09 0v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87zm0 3.24H22.8v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07zm3.09 0v10.87h7.38A2.87 2.87 0 0 0 47 92.07v-8z"></path><path fill="#d27857" d="M50.34 106.73s-.15-24.74 0-30.99c.15-6.24 6.01-11.64 12.8-11.41c8.4.29 12.72 5.01 13.03 11.1s.31 31.68.31 31.68z"></path><path fill="#ab5932" d="M53.47 108.07s-.12-26.36 0-31.24c.15-6.05 4.71-9.23 10.01-8.93c6.17.35 9.22 3.63 9.46 8.4c.24 4.76.24 31.79.24 31.79z"></path><path fill="#d27857" d="M69.99 86.58c-.02-4.34-.06-8.17-.12-9.34c-.16-3.15-2.4-5.6-6.75-5.75c-3.51-.12-6.4 2.62-6.48 5.85c-.03 1.19-.02 4.93 0 9.19zm-13.32 4.87c.04 5.81.09 11.16.09 11.16l13.27.04s0-5.33-.02-11.14z"></path><path fill="#ffba02" d="M70.03 88.81c-.05 1.41.52 2.55 2.19 2.55s2.28-.78 2.4-2.29c.1-1.35-.83-2.55-2.4-2.45c-1.56.11-2.15 1.2-2.19 2.19"></path><path fill="#728037" d="M79.61 116.31s10.88.11 18.74-.12s13.55.12 14.72-1.06c1.17-1.17 1.15-11.14-4.3-13.84c-5.01-2.48-8.25.04-9.97.21c-2.27.23-5.08-1.18-7.14-1.22c-8.51-.18-11.49 6.51-11.49 6.51zm-65.08-.82c.91.85 7.86.88 16.25.82s15.14.02 15.14.02l1.4-8.47l-1.7-1.41s.19-4.24-5.16-5.69c-3.7-1-6.92.65-10.03.7c-3.11.06-5.98-1.35-9.44-.53c-3.22.76-5.73 2.86-6.75 7.1c-.71 2.94-.53 6.69.29 7.46"></path><path fill="#b0b0b0" d="m44.92 125.17l.07-8.85h.65l-.01-9.86h34.73l-.12 9.86H81v8.62c-.01-.01-36.08.28-36.08.23"></path><path fill="#9b9b9b" d="M80.99 121.3v3.63l-36.08.24l.03-3.9zm-35.37-8.82l34.65.01v3.82H45.62z"></path></svg>, count: "3.2k+" },
  { name: "Sports", icon:<svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path stroke="#344054" d="M20.146 6.896L25 10.416l4.854-3.52M6.292 24.02l4.833-3.52l-1.833-5.708M37.5 37.5l-4-.083l-1.52 4.958M12.5 37.5l4-.083l1.52 4.958m22.71-27.583L38.874 20.5l4.833 3.52M25 16.667v-6.25zm-7.48 5.52L11.126 20.5zm2.98 9.063l-4.062 6.25zm9 0l4.063 6.25zm2.792-9.02l6.583-1.73zM25 16.666l-7.292 5.562L20.5 31.25h9l2.792-9.02z"></path><path stroke="#306cfe" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></path></g></svg>, count: "1.1k+" },
  { name: "Books", icon:<svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="#01579b" d="M118.03 102.32L72.29 123c-2.82 1.33-5.76 1.2-8.46-.36L6.09 93.32c-1.65-1.06-2.14-2.61-2.04-3.69s.35-2.25 3.25-3.09l4.28-1.58l57.92 31.57l41.16-16.82z"></path><path fill="#f5f5f5" d="M71.74 119.69a7.95 7.95 0 0 1-7.26-.26L8.11 91.03c-.8-.44-1.04-1.45-.56-2.23c1.24-2.05 3.52-8.53-.24-13.91l63.66 30.65z"></path><path fill="#94c6d6" d="m115.59 99.98l-43.85 19.71c-1.45.63-4.34 1.75-7.67-.49c2.63.19 4.48-.9 5.43-2.67c.93-1.72.65-4.54-.48-6.13c-.69-.96-2.54-2.49-3.35-3.35L113.1 88.5c4.2-1.73 8.14.86 8.77 4.01c.7 3.56-3.84 6.47-6.28 7.47"></path><path fill="#01579b" d="m117.78 86.96l-45.27 20.2c-2.85 1.13-6.04.98-8.77-.4L5.9 77.38c-.56-.28-1.39-1.05-1.72-2.1c-.54-1.75.14-3.95 2.19-4.65l62.68 31.95l42.92-18.37z"></path><path fill="#0091ea" d="m121.19 89.89l-4.93-1.79l-10.16.59l-33.58 14.99c-2.85 1.13-6.04.98-8.77-.4L5.9 73.91c-1.49-.76-1.17-2.97.47-3.28l41.69-18.65c1.19-.22 2.41-.09 3.52.38l59.49 28.36s9.45 6.47 10.12 9.17"></path><path fill="#616161" d="M105.53 88.98s6.26-2.45 11.18-2.23s6.63 3.67 6.63 3.67c-.93-4.23-5.3-6.39-5.3-6.39l-65-32.73c-.45-.19-2.11-.58-4.66.47c-2.06.85-8.79 4-8.79 4z"></path><path fill="#424242" d="M123.62 91.22c-.47-1.87-1.63-3.87-3.77-4.84c-2.82-1.27-6.84-.94-9.41.4l-4.91 2.18v3.46l6.21-2.76c6.04-2.69 8.72 1.34 8.95 2.29c.96 3.87-.9 6.11-6.39 8.63l-8.92 4.02v3.48l10.26-4.57c4.54-1.82 9.72-5.24 7.98-12.29"></path><path fill="#01579b" d="M33.01 90.31L15.74 66.44l2.71-1.21l19.43 26.7zm22.15 11l-3.08-2.44l53.45-10.91v1.75l-7.49 2.84z"></path><path fill="#9ccc65" d="M14.8 46.18L82.31 34.9l29.49 32.47c1.49 1.57.68 4.17-1.44 4.6l-69.7 14.3z"></path><path fill="#689f38" d="M110.36 69.17L41.14 83.19l-.22 3.3l69.44-14.24c1.96-.41 2.78-2.65 1.71-4.23c-.38.56-.96 1-1.71 1.15m3.73 15.13c.73 1.16.07 2.69-1.27 2.96L49.1 100.18c-3.83.79-7.59-1.72-7.93-5.62c-.29-3.3 1.94-6.29 5.19-6.97l61.28-13.76z"></path><path fill="#616161" d="M55.59 80.1L30.21 43.78l-14.48 3.83c-3.35 3.33-2.1 8.8-2.1 8.8S35.8 91.99 39.3 96.54s8.61 3.84 8.61 3.84l8.63-1.74l-.9-16.1z"></path><path fill="#424242" d="M55.59 80.34L43.4 82.86c-3.33.75-3.93 3.88-3.93 3.88L10.04 44.57s-4.19 5.07-1.41 9.38L39.3 96.54c3.35 4.77 8.61 3.88 8.61 3.88l8.63-1.74l-.89-15.78z"></path><path fill="#b9e4ea" d="M110.25 83c.31.68-.09 1.47-.82 1.62L48.5 97.12c-3.83.79-6.54-1.75-6.4-5.21c.18-4.37 2.63-6.22 5.87-6.89l61.23-12.51s-2.08 2.34-.49 6.72c.54 1.51 1.12 2.85 1.54 3.77"></path><path fill="none" stroke="#424242" strokeMiterlimit={10} strokeWidth={2.071} d="M45.21 83.7L19.1 46.76"></path><path fill="#424242" d="M47.26 67.95L13.68 51.03l-1.36 2.68l38.8 19.77z"></path><path fill="#689f38" d="m108.79 64.03l-2.46-2.7L68.5 78.69L47.26 68.18l3.62 5.18l14.07 7.19l10.48-1.61z"></path><path fill="#c62828" d="M118.02 57.35L72.29 78.03c-2.82 1.33-5.76 1.2-8.46-.36L6.09 48.35c-1.65-1.06-2.14-2.61-2.04-3.69s.35-2.25 3.25-3.09l2.71-1l59.32 29.11l48.17-19.93z"></path><path fill="#f5f5f5" d="M71.73 74.72a7.95 7.95 0 0 1-7.26-.26L8.1 46.06c-.8-.44-1.04-1.45-.56-2.23c1.24-2.05 3.52-8.53-.24-13.91l62.24 31.66z"></path><path fill="#94c6d6" d="M115.58 55.01L71.73 74.72c-1.45.63-4.34 1.75-7.67-.49c2.63.19 4.48-.9 5.43-2.67c.93-1.72.65-4.54-.48-6.13c-.69-.96-2.54-2.49-3.35-3.35l47.43-18.55c4.2-1.73 8.14.86 8.77 4.01c.7 3.56-3.84 6.47-6.28 7.47"></path><path fill="#c62828" d="m117.78 41.99l-45.27 20.2c-2.85 1.13-6.04.98-8.77-.4L5.89 32.41c-.6-.3-1.5-1.07-1.79-2.16c-.43-1.62.13-3.75 2.26-4.59l53.01-11.23z"></path><path fill="#f44336" d="m121.18 44.92l-4.93-1.79l-10.16.59l-33.58 14.99c-2.85 1.13-6.04.98-8.77-.4L5.89 28.93c-1.49-.76-.96-2.77.47-3.28l41.7-18.64c1.19-.22 2.41-.09 3.52.38l59.49 28.36s9.44 6.46 10.11 9.17"></path><path fill="#616161" d="M105.53 44s5.21-1.83 10.13-1.61s7.69 3.05 7.69 3.05c-1.01-4.52-5.3-6.39-5.3-6.39l-65-32.73c-.45-.19-2.11-.58-4.66.47c-2.06.85-8.79 4-8.79 4z"></path><path fill="#424242" d="M111.48 41.86L44.97 8.31l2.2-.99l67.64 33.9z"></path><path fill="#424242" d="M123.61 46.25c-.47-1.87-1.26-3.68-3.49-4.62c-2.85-1.2-5.45-1.45-9.69.18l-4.91 2.18v3.46l6.21-2.76c3.15-1.48 7.79-1.16 8.95 2.29c1.27 3.78-.9 6.11-6.39 8.63l-8.92 4.02v3.48l10.26-4.57c4.55-1.82 9.73-5.24 7.98-12.29"></path></svg>, count: "4.7k+" },
  { name: "Beauty", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="#c62828" d="M40.05 80.51V34.17c0-16.97 6.02-29.31 12.97-29.94c6.02-.55 11.45 1.47 17.97 5.83c9.38 6.27 16.96 16.09 16.96 26.11v44.34S80.91 81.95 64 81.95s-23.95-1.44-23.95-1.44"></path><path fill="#f44336" d="M54.21 25.21c7.98 12.97 19.96 15.97 26.95 12.97c4.94-2.12 5.56-5.8 3.99-9.98C79.16 12.24 61.19 2.26 53.21 4.25c-4.94 1.24-5.7 10.08 1 20.96"></path><path fill="#ff8383" d="M68.34 36.84c.75.51.05 1.07-.8.75c-3.3-1.23-8.84-2.92-14.51-9.72c-3.39-4.07-5.37-9.4-5-14.68c.12-1.66.85-4.47 2.07-6.35c.51-.79.86-.42.7.74c-.67 4.9.77 9.27 2.11 12.19C57.3 29.3 63.89 33.8 68.34 36.84"></path><path fill="#e2a610" d="M93.47 96.85s-9.75 2.65-29.74 2.65s-29.2-2.65-29.2-2.65V80.02l58.93-.07v16.9z"></path><path fill="#9e740b" d="m91.05 95.11l-11.52 1.85V83.42l11.52-1.86z"></path><path fill="#a12524" d="M87.95 79.9S79.86 82 62.59 82s-22.54-2.1-22.54-2.1V68.66s3.3 7.42 23.38 5.81c21.39-1.71 24.53-12.42 24.53-12.42V79.9z"></path><path fill="#ffca28" d="M87.96 76.67c0 2.24-10.81 4.05-23.96 4.05s-24-1.81-24-4.05c0 0-5.47 2.16-5.47 3.26c0 2.77 13.19 5.02 29.47 5.02s29.47-2.25 29.47-5.02c0-1.11-5.51-3.43-5.51-3.26"></path><path fill="#fff59d" d="M50.99 83.9c-3.44-.23-5.85-.88-6.59-1.79c-1.12-1.37.19-2.18 1.62-2.02c1.94.22 2.22.43 6.1.81c4.53.44 7.92.44 6.85 1.79c-.72.9-3.98 1.48-7.98 1.21"></path><path fill="#424242" d="M100.19 96.29s-11.83 4.6-35.92 4.6s-36.45-4.55-36.45-4.55l.04 21.82C28.83 121.41 44.64 124 64 124s35.17-2.59 36.14-5.85z"></path><path fill="#212121" d="M96.5 120.56c-2.09.91-9.92 2.4-16.02 2.75V101.5l16.05-2.59z"></path><path fill="#757575" d="M93.42 92.21c0 2.75-13.28 4.97-29.42 4.97s-29.48-2.23-29.48-4.97c0 0-6.71 2.65-6.71 4c0 3.4 16.2 6.16 36.19 6.16s36.19-2.76 36.19-6.16c0-1.35-6.77-4.2-6.77-4"></path><path fill="#90a4ae" d="M55.42 101.12c-3.87.11-10.42-.27-14.17-1.46c-3.62-1.15-1.95-3.79 1.25-3.24c2.95.51 7.32 1.37 17.77 1.49c3.13.03 3.29 1.08 3.09 1.75c-.28.95-1.57 1.29-7.94 1.46"></path></svg>, count: "2.9k+" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Buyer",
    content: "Amazing quality products and fast delivery. This is now my go-to online store!",
    avatar: "/images/image1.jpg",
    rating: 5,
    purchase: "Premium Wireless Headphones",
    date: "2 weeks ago"
  },
  {
    name: "Michael Chen",
    role: "Premium Member",
    content: "The customer service is exceptional and the product range is incredible. Highly recommended!",
    avatar: "/images/image2.jpg",
    rating: 5,
    purchase: "Smart Fitness Watch",
    date: "1 month ago"
  },
  {
    name: "Emily Rodriguez",
    role: "Loyal Customer",
    content: "I've been shopping here for years and never been disappointed. Great prices and quality!",
    avatar: "/images/image3.jpg",
    rating: 5,
    purchase: "Ultra HD Camera",
    date: "3 weeks ago"
  },
  {
    name: "David Kim",
    role: "Verified Buyer",
    content: "Fast shipping and excellent product quality. Will definitely shop here again!",
    avatar: "/images/image4.jpg",
    rating: 5,
    purchase: "Portable Speaker",
    date: "1 week ago"
  }
];

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "100K+", label: "Products Sold" },
  { number: "24/7", label: "Support" },
  { number: "99.9%", label: "Satisfaction Rate" }
];

export default function Home1() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [cart, setCart] = useState<Array<{id: number, name: string, price: string, image: string, quantity: number}>>([]);
  const [showCartMessage, setShowCartMessage] = useState<number | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) {
      alert('Please login to access this page');
      window.location.href = '/auth';
      return;
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const addToCart = (product: {id: number, name: string, price: string, image: string}) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    // Show success message
    setShowCartMessage(product.id);
    setTimeout(() => setShowCartMessage(null), 2000);
  };

  const allProducts = [...featuredProducts, ...additionalProducts];

  const handleViewAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <>
      <Head>
        <title>Stackly - Your Premium E-commerce Destination</title>
        <meta name="description" content="Discover amazing products at unbeatable prices" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        {/* Main content with top margin for fixed header */}
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio1.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Discover Amazing
                  <span className="block text-indigo-200">Products</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  Shop the latest trends with unbeatable prices and premium quality. 
                  Join thousands of satisfied customers worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg text-center">
                    Connect
                  </Link>
                  <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 text-center">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Categories Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Shop by Category
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Explore our wide range of categories and find exactly what you're looking for
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((category, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-600">
                      <div className="text-4xl mb-3 flex justify-center">{category.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{category.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Products
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Handpicked products that our customers love the most
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(showAllProducts ? allProducts : featuredProducts).map((product) => (
                  <div key={product.id} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          -{Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300 dark:fill-gray-600'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{product.price}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">{product.originalPrice}</span>
                          </div>
                          <div className="relative">
                            <button 
                              onClick={() => addToCart(product)}
                              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                            >
                              Add to Cart
                            </button>
                            {showCartMessage === product.id && (
                              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-10">
                                Added to cart! ✓
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button 
                  onClick={handleViewAllProducts}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
                >
                  {showAllProducts ? 'Show Less' : 'View All Products'}
                </button>
              </div>
            </div>
          </section>

          {/* Cart Display Section */}
          {cart.length > 0 && (
            <section className="py-12 bg-gray-50 dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Total: ${cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2)}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.price} × {item.quantity}
                          </p>
                        </div>
                        <button 
                          onClick={() => setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id))}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <button 
                    onClick={() => setCart([])}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium mr-4"
                  >
                    Clear Cart
                  </button>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Checkout
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Stats Section */}
          <section className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose Us ?
                </h2>
                <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                  We're committed to providing the best shopping experience with quality products and exceptional service
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-indigo-200 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-indigo-100 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section - Flip Cards */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Don't just take our word for it - hear from our satisfied customers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group perspective-1000">
                    <div className="relative w-full h-80 transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      {/* Front of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-indigo-100 dark:border-indigo-900">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">{testimonial.name}</h4>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{testimonial.role}</p>
                        <div className="flex text-yellow-400 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Click to see more</p>
                      </div>
                      
                      {/* Back of card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden bg-indigo-600 dark:bg-indigo-700 rounded-xl p-6 shadow-lg rotate-y-180 flex flex-col items-center justify-center text-center text-white">
                        <div className="mb-4">
                          <svg className="w-12 h-12 text-indigo-200 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm mb-4 leading-relaxed">"{testimonial.content}"</p>
                        <div className="text-xs text-indigo-200 mb-2">
                          <strong>Purchased:</strong> {testimonial.purchase}
                        </div>
                        <div className="text-xs text-indigo-200">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* New Stay Updated Section - Modern Template */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay in the Loop
                </h2>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                  Get exclusive access to early bird deals, new product launches, and insider tips delivered straight to your inbox
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Exclusive Deals</h3>
                      <p className="text-indigo-100">Be the first to know about flash sales and limited-time offers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">New Product Alerts</h3>
                      <p className="text-indigo-100">Get notified when we launch exciting new products</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Shopping Tips</h3>
                      <p className="text-indigo-100">Expert advice to help you make the best purchasing decisions</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Newsletter Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-indigo-100 mb-2">
                        Email Address
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm"
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Subscribe Now
                    </button>
                    
                    {isSubscribed && (
                      <div className="text-center p-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                        <p className="text-green-100">🎉 Successfully subscribed! Welcome to the family!</p>
                      </div>
                    )}
                    
                    <p className="text-xs text-indigo-200 text-center">
                      We respect your privacy. Unsubscribe at any time. No spam, ever.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
