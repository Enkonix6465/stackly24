import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';

//  data for the home2 page
const heroFeatures = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="#ca2c31" d="m3.77 71.73l16.34-16.1l27.82-4.93l-2.75 14.56L7.57 76.82l-2.43-1.05z"></path><path fill="#a02422" d="M22.94 59.76L5.2 75.88l13.05 6.36l19.81-10.11v-4.77l4.05-10.92zm41.98 28.39l-8.57 3.72l-8.09 17.15s7.12 15.77 7.44 15.77s4.37.32 4.37.32l14.4-16.1l3.64-27.5z"></path><path fill="#ca2c31" d="M56.5 100.84s4.77-.97 8.17-2.59s7.6-4.04 7.6-4.04l-1.54 13.43l-15.05 17.13s-.59-.73-3.09-6.17c-1.99-4.34-2.68-5.89-2.68-5.89z"></path><path fill="#f7d74d" d="M31.58 80.66s-5.74-.48-12.03 7.47c-5.74 7.26-8.43 19.08-9.47 22.12s-3.53 3.66-2.7 5.05s4.42 1.31 8.85.76s8.23-1.94 8.23-1.94s-.19.48-.83 1.52c-.23.37-1.03.9-.97 1.45c.14 1.31 11.36 1.34 20.32-7.88c9.68-9.95 4.98-18.11 4.98-18.11z"></path><path fill="#fbf0b4" d="M33.31 85.29s-6.19.33-11.31 8.28s-7.5 17.16-7.01 17.78c.48.62 10.02-2.83 12.31-2.14c1.57.48.76 2.07 1.18 2.49c.35.35 4.49.94 11.19-6.32c6.71-7.26 5.12-17.46 5.12-17.46z"></path><path fill="#858585" d="M36.35 74.44s-3.11 2.77-4.22 4.36s-1.11 1.73-1.04 2.21s1.22 5.75 6.01 10.37c5.88 5.67 11.13 6.43 11.89 6.43s5.81-5.67 5.81-5.67z"></path><path fill="#437687" d="M50.1 91.24s5.04 3.31 13.49.47c11.55-3.88 20.02-12.56 30.51-23.52c10.12-10.58 18.61-23.71 18.61-23.71l-5.95-19.93z"></path><path fill="#3f545f" d="m67.99 80.33l1.39-4.32l3.48.49s2.65 1.25 4.6 2.16s4.46 1.6 4.46 1.6l-4.95 4.18s-2.7-1.02-4.67-1.88c-2.22-.97-4.31-2.23-4.31-2.23"></path><path fill="#8dafbf" d="M84.32 16.14s-9.62 5.58-23.41 18.63c-12.43 11.76-21.64 22.4-23.87 31.45c-1.86 7.58-.87 12.18 3.36 17.15c4.47 5.26 9.71 7.87 9.71 7.87s3.94.06 20.38-12.59C91 62.86 107.43 36.42 107.43 36.42z"></path><path fill="#d83f22" d="M104.18 41.84s-8.37-3.57-14.34-11.9c-5.93-8.27-5.46-13.86-5.46-13.86s4.96-3.89 16.11-8.34c7.5-2.99 17.71-4.52 21.07-2.03s-2.3 14.98-2.3 14.98l-10.31 19.96z"></path><path fill="#6896a5" d="M68.17 80.4s-7.23-3.69-11.83-8.94c-8.7-9.91-10.5-20.79-10.5-20.79l4.37-5.13S51.3 57.1 60.63 67.09c6.08 6.51 12.43 9.49 12.43 9.49s-1.27 1.07-2.63 2.11c-.87.67-2.26 1.71-2.26 1.71"></path><path fill="#a02422" d="M112.71 44.48s4.34-5.23 8.45-17.02c5.74-16.44.74-21.42.74-21.42s-1.69 7.82-7.56 18.69c-4.71 8.71-10.41 17-10.41 17s3.14 1.41 4.84 1.9c2.14.62 3.94.85 3.94.85"></path><path fill="#b3e1ee" d="M39.81 69.66c1.3 1.24 3.27-.06 4.56-3.1c1.3-3.04 1.28-4.74.28-5.46c-1.24-.9-3.32 1.07-4.23 2.82c-1 1.94-1.59 4.8-.61 5.74m45.14-49.53s-7.61 5.47-15.73 12.91c-7.45 6.83-12.39 12.17-13.07 13.41c-.72 1.33-.73 3.21-.17 4.17s1.8 1.46 2.93.62c1.13-.85 9.18-9.75 16.45-16.11c6.65-5.82 11.78-9.51 11.78-9.51s2.08-3.68 1.74-4.52c-.34-.85-3.93-.97-3.93-.97"></path><path fill="#ed6a65" d="M84.95 20.13s5.62-4.31 11.74-7.34c5.69-2.82 11.35-5.17 12.37-3.13c.97 1.94-5.37 4.58-10.95 8.14s-10.95 7.81-10.95 7.81s-.82-1.5-1.35-2.89a24 24 0 0 1-.86-2.59"></path><path fill="#e1e1e1" d="M89.59 39.25c-5.57-5.13-13.32-3.75-17.14.81c-3.92 4.7-3.63 11.88 1 16.2c4.21 3.92 12.04 4.81 16.76-.69c4.2-4.88 3.94-12.13-.62-16.32"></path><path fill="#3f545f" d="M75.33 41.87c-3.31 3.25-3.13 9.69.81 12.63c3.44 2.57 8.32 2.44 11.38-.69s3.06-8.82.19-11.76c-3.3-3.37-8.59-3.9-12.38-.18"></path><path fill="#a02524" d="M50 76.89s6.19-6.28 6.87-5.6s.59 4.49-2.37 8.73C51.53 84.26 45 91.81 39.83 96.9c-5.1 5.01-12.29 10.74-12.97 10.64c-.53-.08-2.68-1.15-3.54-2.19c-.84-1.03 1.67-5.9 2.68-7.51c1.02-1.61 24-20.95 24-20.95"></path><path fill="#ca2c31" d="M21.23 101.85c-.08 1.44 2.12 3.54 2.12 3.54L56.87 71.3s-1.57-1.77-6.19 1.1c-4.66 2.9-8.74 6.38-14.76 12.21c-8.39 8.14-14.61 15.8-14.69 17.24"></path><path fill="#fff" d="M19.06 36.95c-1.11 1.11-1.16 2.89.08 3.91c1.1.91 2.89.32 3.56-.5s.59-2.6-.3-3.48c-.89-.89-2.66-.6-3.34.07"></path><path fill="#fff" d="M41.02 35.65c-.84.93-.57 2.31.21 2.82s1.95.46 2.52-.24c.51-.63.57-1.89-.21-2.67c-.68-.67-1.98-.51-2.52.09" opacity={0.5}></path><path fill="#fff" d="M55.55 11.89s1.22-3.48 1.94-3.52c.73-.04 1.78 3.48 1.78 3.48s3.61.04 3.85.57c.31.68-2.31 2.96-2.31 2.96s.85 3.4.45 3.81c-.45.45-3.56-1.34-3.56-1.34s-3.2 2.23-3.89 1.62c-.6-.53.65-4.13.65-4.13s-3-2.19-2.84-2.8c.23-.86 3.93-.65 3.93-.65m41.46 83.44c1.21.67 2.73.29 3.29-1c.51-1.15-.43-2.52-1.28-2.89s-2.34.12-2.88 1.09c-.53.96.14 2.4.87 2.8m17.18-29.49c-.69-1.07-2.18-1.42-3.15-.56c-.94.84-.71 2.16-.18 2.83s1.95.92 2.81.37s.94-2 .52-2.64"></path></svg>, title: "Lightning Fast", description: "Built for speed and performance" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 512 512"><path fill="#b1b4b5" d="M376.749 349.097c-13.531 0-24.5-10.969-24.5-24.5V181.932c0-48.083-39.119-87.203-87.203-87.203c-48.083 0-87.203 39.119-87.203 87.203v82.977c0 13.531-10.969 24.5-24.5 24.5s-24.5-10.969-24.5-24.5v-82.977c0-75.103 61.1-136.203 136.203-136.203s136.203 61.1 136.203 136.203v142.665c0 13.531-10.969 24.5-24.5 24.5"></path><path fill="#ffb636" d="M414.115 497.459H115.977c-27.835 0-50.4-22.565-50.4-50.4V274.691c0-27.835 22.565-50.4 50.4-50.4h298.138c27.835 0 50.4 22.565 50.4 50.4v172.367c0 27.836-22.565 50.401-50.4 50.401"></path><path fill="#ffd469" d="M109.311 456.841h-2.525c-7.953 0-14.4-6.447-14.4-14.4V279.309c0-7.953 6.447-14.4 14.4-14.4h2.525c7.953 0 14.4 6.447 14.4 14.4v163.132c0 7.953-6.447 14.4-14.4 14.4"></path></svg>, title: "Secure & Reliable", description: "Enterprise-grade security" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 64 64"><path fill="#5c6d6d" d="M50 4.1c0-2-2.1-4.1-4.3-4.1H18.3C16.1 0 14 2.1 14 4.1v55.7c0 2.1 2.1 4.1 4.3 4.1h27.5c2.1 0 4.3-2.1 4.3-4.1V4.1z"></path><path fill="#212528" d="M49 59c0 2-2 4-4 4H19c-2 0-4-2-4-4V5c0-2 2-4 4-4h26c2 0 4 2 4 4z"></path><g fill="#94989b"><circle cx={43.5} cy={4.5} r={1}></circle><path d="M35 4.5c0 .3-.1.5-.3.5h-5.4c-.2 0-.3-.2-.3-.5c0-.2.1-.5.3-.5h5.4c.2 0 .3.3.3.5"></path></g><path fill="#3e4347" d="M17 8h30v48H17z"></path><path fill="#94989b" d="M35.8 60.2c0 .4-.3.8-.8.8h-6c-.4 0-.8-.3-.8-.8v-1.5c0-.4.3-.8.8-.8h6c.4 0 .8.3.8.8z"></path><path fill="#42ade2" d="M24 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c7e755" d="M31 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#f2b200" d="M38 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#42ade2" d="M45 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c7e755" d="M24 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#ff435e" d="M31 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#42ade2" d="M38 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c28fef" d="M45 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c7e755" d="M24 33.9c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c28fef" d="M31 33.9c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#42ade2" d="M38 33.9c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#ff435e" d="M24 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#f2b200" d="M31 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c7e755" d="M38 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#f2b200" d="M45 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c28fef" d="M24 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#42ade2" d="M31 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#ff435e" d="M38 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path><path fill="#c28fef" d="M45 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path></svg>, title: "Mobile First", description: "Optimized for all devices" }
];

const services = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="none" stroke="#00796b" strokeMiterlimit={10} strokeWidth={3} d="M26.96 39.45c-.75-5.68-2.02-15.69-1.18-21.2s3.04-10.59 7.63-12.6c3.97-1.73 8.92.1 11.78 4.38c1.63 2.44 2.56 5.45 3.35 8.43c1.35 5.12 2.64 12.12 3.29 17.39"></path><path fill="#26a69a" d="M30.71 116.64L6.54 106.57l5.61-24.74l-1.2-56.38l61.16-7.18v5.34l14.55 1.84z"></path><path fill="#61de9f" d="M91.85 107.44L30.7 116.7l-5.2-32.38V34.7l61.16-9.25v49.61z"></path><path fill="#263238" d="M25.5 34.7v-5.58l-14.55-3.67l61.28-6.8l1.96 4.34l12.47 2.46z"></path><path fill="#00796b" d="M6.54 106.57c.42 0 14.48-11.15 14.48-11.15l9.68 21.28l-2.08-33.93l-3.15-48.07l-4.09 51.95z"></path><path fill="#26a69a" d="m72.05 19.29l1.48 3.42l.19.45l.47.12l7.45 1.91l-55.14 8.35v-5.2l-.76-.19l-9.28-2.34zm.63-1.08l-61.72 7.24l14.55 3.67v5.59l61.15-9.26l-12.21-3.14z"></path><path fill="none" stroke="#61de9f" strokeMiterlimit={10} strokeWidth={3} d="M43.95 38.45C43.2 32.78 35.39 11 50.34 8.22c11.3-2.1 16.29 21.97 16.95 27.25"></path><path fill="#26a69a" d="M45.81 40.03c-.87-2.93-1.78-8.85-1.82-9.11l2.96-.45c.01.06 1.07 6.1 2.23 8.93zm23.32-3.55c-.87-2.93-1.78-8.85-1.82-9.11l2.96-.45c.01.06 1.24 6.2 2.27 8.94zm-22.29 77.78l8.4-14.55l-4.01-38.79l33.57-6.53l-18 56.89z"></path><path fill="none" stroke="#d7578a" strokeMiterlimit={10} strokeWidth={3} d="M73.07 57.05s-3.78-20.07 8.81-18.74c6.85.72 6.57 16.65 6.57 16.65"></path><path fill="#d7578a" d="m74.46 123.99l-18.57-7.77l4.32-19.02l-.92-43.34l47-5.52v4.11l11.18 1.41z"></path><path fill="#ff9f9f" d="m121.46 116.88l-47 7.12l-3.99-24.89V60.98l47-7.12V92z"></path><path fill="#263238" d="m70.47 60.98l-3.76-2.88l-7.42-4.24l47-5.52l4.27 2.69l6.91 2.83z"></path><path fill="#d7578a" d="m106.11 49.37l8.05 3.97l-43.48 6.58l-8.49-5.4zm.18-1.03l-47 5.52l11.18 7.12l47-7.12z"></path><path fill="#d7578a" d="M86.36 64.81c-.67-2.24-1.36-6.79-1.39-6.98l2.64-.34c.01.05.68 4.63 1.3 6.74zm17.89-2.75c-.67-2.24-1.36-6.79-1.39-6.98l2.61-.33c.01.05.55 4.77 1.17 6.88z"></path><path fill="none" stroke="#ff9f9f" strokeMiterlimit={10} strokeWidth={3} d="M84.88 64.91c-.58-4.36-6.52-22.74 4.68-24.29c8.75-1.21 12.52 16.89 13.03 20.94"></path><path fill="#ab2c5e" d="m55.89 116.22l9.49-8.04L74.46 124l-3.97-24.74l.04-38.16l-1.12-.46l-3.54 38.79z"></path></svg>, title: "E-commerce Solutions", description: "Complete online store management",
    features: ["Product Catalog", "Order Processing", "Payment Gateway"]
  },
  {
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 40 40"><g fill="none" strokeMiterlimit={10}><path fill="#ff52a1" stroke="#231f20" d="M10.23 22.33c-.45-1-2.78-1-4.53-1s-4.08 0-4.53 1C.72 22.84.5 25.55.5 27.8s.22 5 .67 5.47c.45 1 2.78 1 4.53 1s4.08 0 4.53-1c.45-.51.67-3.22.67-5.47s-.22-4.96-.67-5.47Zm14.3-7.19c-.45-1.63-2.78-1.64-4.53-1.64s-4.08 0-4.53 1.64c-.47.86-.67 5.16-.67 8.76s.22 7.94.67 8.76c.45 1.63 2.78 1.64 4.53 1.64s4.08 0 4.53-1.64c.45-.82.67-5.16.67-8.76s-.2-7.9-.67-8.76Z" strokeWidth={1}></path><path fill="#ffe236" stroke="#231f20" d="M38.83 8c-.45-2.28-2.78-2.3-4.53-2.3s-4.08 0-4.53 2.26c-.45 1.12-.67 7.09-.67 12s.22 10.92.67 12c.45 2.24 2.78 2.26 4.53 2.26s4.08 0 4.53-2.26c.45-1.12.67-7.09.67-12S39.28 9.08 38.83 8Z" strokeWidth={1}></path><path stroke="#fff" strokeLinecap="round" d="M35.7 8c.83 0 1 .19 1.2 1.82M21.66 16c.82 0 1.05.19 1.2 1.82M7.1 23.63c.82 0 1.05.19 1.2 1.82" strokeWidth={1}></path></g></svg>, title: "Analytics & Insights", description: "Data-driven business decisions",
    features: ["Sales Reports", "Customer Analytics", "Performance Metrics"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="m9.61 19l-.01-5.96c.52-.64 1.32-1.04 2.16-1.04h3.6c.89 0 1.64.74 1.64 1.62V19h12v2l-1 1l1 1v2.65c0 .75-.61 1.35-1.35 1.35H3.36c-.75 0-1.35-.6-1.35-1.35V24l1.47-1.4L2.01 21c0-1.1.9-2 2-2z"></path><path fill="#50e2ff" d="M13 18.14V13.9c0-.5-.4-.9-.9-.9H9.62L5 19h7.14c.48 0 .86-.38.86-.86"></path><path fill="#321b41" d="M29.04 19c.55 0 1-.45 1-1s-.45-1-1-1H17.01v2zM7.5 30a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m16 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></path><path fill="#f9c23c" d="M29 21h-.5c-.85 0-1.54.71-1.5 1.57c.04.81.74 1.43 1.55 1.43H29z"></path><path fill="#e6e6e6" d="M2 24h.91c.6 0 1.09-.49 1.09-1.09v-.82c0-.6-.49-1.09-1.09-1.09H2zm5.5 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m16 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></path></g></svg>, title: "Logistics & Shipping", description: "Streamlined delivery operations",
    features: ["Inventory Management", "Shipping Integration", "Tracking Systems"]
  },
  {
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 48 48"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#2f88ff" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"></path><path stroke="#fff" strokeLinecap="square" d="M4 16H44"></path><path stroke="#fff" strokeLinecap="round" d="M27 32H36"></path><path stroke="#000" strokeLinecap="round" d="M44 10V26"></path><path stroke="#000" strokeLinecap="round" d="M4 10V26"></path></g></svg>, title: "Payment Solutions", description: "Secure payment processing",
    features: ["Multiple Gateways", "Fraud Protection", "Recurring Billing"]
  }
];

const testimonials = [
  {
    name: "Alexandra Chen", role: "CEO, TechStart",
    content: "ShopHub transformed our business. We've seen a 300% increase in sales since switching.",
    avatar: "/images/image5.jpg", rating: 5
  },
  {
    name: "Marcus Rodriguez", role: "Founder, FashionHub",
    content: "The platform is incredibly intuitive. Our team was up and running in just one day.",
    avatar: "/images/image6.jpg", rating: 5
  },
  {
    name: "Sarah Kim", role: "Operations Manager, EcoStore",
    content: "Customer support is exceptional. They've helped us scale from 100 to 10,000 orders monthly.",
    avatar: "/images/image7.jpg", rating: 5
  }
];

const pricingPlans = [
  {
    name: "Starter", price: "$29", period: "/month", description: "Perfect for small businesses",
    features: ["Up to 100 products", "Basic analytics", "Email support", "Mobile app"], popular: false
  },
  {
    name: "Professional", price: "$79", period: "/month", description: "Ideal for growing businesses",
    features: ["Up to 1000 products", "Advanced analytics", "Priority support", "API access", "Custom domain"], popular: true
  },
  {
    name: "Enterprise", price: "$199", period: "/month", description: "For large-scale operations",
    features: ["Unlimited products", "Custom analytics", "24/7 support", "White-label solution", "Advanced integrations"], popular: false
  }
];

const stats = [
  { number: "10M+", label: "Products Sold", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="none" d="m15.73 105.38l13.1-26.6V41.2l-13.1 26.61z"></path><path fill="#513118" d="M31.4 32.91h-1.95L12.81 66.77c-.1.21-.16.44-.16.68V112a1.53 1.53 0 0 0 1.54 1.54c.58 0 1.12-.33 1.38-.86l15.82-32.14h87.47V32.91zm-2.57 45.87l-13.1 26.61V67.81l13.1-26.61z"></path><path fill="#513118" d="m14.58 69.12l16.17-32.87V80.8l-16.17 32.87z"></path><path fill="#904427" d="M106.58 39.01H87.41c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c0-1.03-.83-1.86-1.86-1.86"></path><path fill="#ffd393" d="M32.95 45.79h75.49v44.55H32.95z"></path><path fill="#64758b" d="M84.29 43.99H65.11c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.02-.82-1.86-1.85-1.86"></path><path fill="#ffd393" d="M29.03 51.24h75.49v44.55H29.03z"></path><path fill="#eeba73" d="M104.08 67.26s0-1.97-.01-4.93c0-1.48-.01-3.2-.01-5.05v-1.41c-.01-.47.02-.98-.06-1.36c-.15-.82-.64-1.61-1.33-2.11c-.35-.25-.74-.44-1.15-.54c-.42-.11-.8-.12-1.32-.11c-.97.01-1.93.02-2.85.04c-1.85.04-3.57.03-5.05 0s-2.71-.02-3.57-.06c-.86-.03-1.36-.05-1.36-.05a.45.45 0 0 1-.43-.47c.01-.24.2-.42.43-.43c0 0 .49-.02 1.36-.05c.86-.04 2.09-.04 3.57-.06c1.48-.03 3.2-.04 5.05 0c.92.01 1.88.02 2.85.04c.45 0 1.06.01 1.59.16c.54.15 1.05.4 1.49.74c.89.67 1.5 1.68 1.68 2.78c.09.57.05 1.04.06 1.51v1.41c0 1.85-.01 3.57-.01 5.05c-.01 2.96-.01 4.93-.01 4.93c0 .25-.2.45-.45.45s-.47-.23-.47-.48M39.4 51.66s-.37.04-.94.08c-.56.04-1.31.06-2.06.06s-1.5-.02-2.06-.06s-.94-.09-.94-.09a.46.46 0 0 1-.4-.51c.03-.21.19-.37.4-.4c0 0 .37-.05.94-.09c.56-.04 1.31-.06 2.06-.06c.75.01 1.5.03 2.06.06c.56.04.94.08.94.08c.25.03.43.25.4.5c-.02.25-.19.41-.4.43"></path><path fill="#855731" d="M62.62 48.83H43.44c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.03-.82-1.86-1.85-1.86"></path><path fill="#ffd393" d="M25.28 56.54h75.49v44.55H25.28z"></path><path fill="#eeba73" d="M41.57 56.98s-.73.06-1.83.1c-1.1.05-2.56.07-4.02.08c-1.46-.01-2.93-.02-4.02-.08c-1.1-.04-1.83-.11-1.83-.11a.576.576 0 0 1-.52-.61c.02-.28.25-.49.52-.52c0 0 .73-.06 1.83-.11s2.56-.07 4.02-.08c1.46.01 2.93.03 4.02.08c1.1.05 1.83.1 1.83.1c.31.02.55.3.52.61a.57.57 0 0 1-.52.54m59.04 16.25s-.01-3.15-.02-7.87c0-1.18 0-2.46-.01-3.81c-.02-.66.04-1.42-.09-1.97c-.14-.6-.45-1.18-.91-1.64c-.45-.46-1.04-.79-1.69-.92c-.6-.13-1.41-.06-2.18-.07c-1.55.01-3.12.02-4.7.02c-3.15.01-6.29.05-9.24.03s-5.7-.03-8.06-.05c-2.36-.01-4.33-.03-5.7-.06c-1.38-.02-2.16-.04-2.16-.04c-.25 0-.45-.21-.44-.46c0-.24.2-.44.44-.44c0 0 .79-.01 2.16-.04c1.38-.03 3.34-.05 5.7-.06s5.11-.03 8.06-.05s6.1.02 9.24.03c1.57.01 3.15.02 4.7.02c.39 0 .77 0 1.16.01c.36-.01.85.02 1.25.11c.84.2 1.6.64 2.18 1.24s.97 1.35 1.13 2.14c.16.85.07 1.49.09 2.18c0 1.35-.01 2.63-.01 3.81c-.01 4.72-.02 7.87-.02 7.87c0 .25-.2.45-.45.45c-.22.02-.43-.18-.43-.43"></path><path fill="#dc7f27" d="M41.44 54.69H22.26c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.03-.83-1.86-1.85-1.86"></path><path fill="#ffd393" d="M20.4 62.96h75.49v44.55H20.4z"></path><path fill="#eeba73" d="M95.83 69.66s-.01-.89-.02-2.44c0-.4-.01-.79-.11-1.17a3.39 3.39 0 0 0-3.27-2.57c-5.33.02-12.43.04-19.54.07c-7.11-.02-14.21-.04-19.54-.06c-5.33-.05-8.88-.08-8.88-.08c-.25 0-.45-.21-.45-.46s.2-.45.45-.45c0 0 3.55-.03 8.88-.08c5.33-.02 12.44-.04 19.54-.06c7.11.02 14.22.05 19.55.07c1.54.02 2.82.86 3.51 1.85c.73.97.85 2.18.81 2.94c-.01 1.55-.02 2.44-.02 2.44c0 .25-.21.45-.46.45s-.45-.2-.45-.45"></path><path fill="#855731" d="M102.12 67.2H12.65v46.48c0 1.06.86 1.93 1.93 1.93h88.75c.73 0 1.4-.42 1.73-1.08l13.82-28.46V32.79z"></path><path fill="#513118" d="M104.29 70.72s.04.65.1 1.78c.04 1.13.15 2.75.2 4.68c.05 1.94.14 4.2.17 6.62c.05 2.42.05 5.01.06 7.59c-.01 2.58-.02 5.17-.06 7.59c-.03 2.42-.12 4.68-.17 6.62s-.15 3.55-.19 4.68c-.07 1.13-.1 1.78-.1 1.78c-.03.54-.49.94-1.03.91a.963.963 0 0 1-.91-.91s-.04-.65-.1-1.78c-.04-1.13-.15-2.75-.19-4.68c-.05-1.94-.13-4.2-.17-6.62s-.05-5.01-.06-7.59c.01-2.58.02-5.17.06-7.59c.03-2.42.12-4.68.17-6.62s.15-3.55.2-4.68c.07-1.13.1-1.78.1-1.78c.03-.54.49-.94 1.03-.91c.47.03.86.43.89.91"></path><path fill="#fff2d4" d="M41.83 85.51h28.83v16.07H41.83z"></path><path fill="#f7b618" d="M66.76 85.51v12.38H45.73V85.51h-3.9v16.07h28.83V85.51z"></path><path fill="#513118" d="M29.18 20.91H119v12.52H29.18z"></path><path fill="#6e451d" d="m118.99 33.42l-16.75-5.58V15.32l16.75 5.59zm-89.62 0l-16.69-5.58V15.32l16.69 5.59z"></path><path fill="#855731" d="M12.42 15.32h89.82v12.52H12.42z"></path><path fill="#f7b618" d="M56.25 23.73a4.11 4.11 0 0 0-4.11 4.11h8.22a4.11 4.11 0 0 0-4.11-4.11m0 47.6a4.11 4.11 0 0 0 4.11-4.11h-8.22a4.11 4.11 0 0 0 4.11 4.11"></path><path fill="#60371a" d="m115.01 34.65l-13 .2c-3.9.03-8.45.07-13.33.11c-4.88.01-10.08.03-15.28.05c-5.2-.02-10.4-.03-15.28-.05c-4.88-.04-9.43-.08-13.33-.11l-13-.2a.655.655 0 0 1-.64-.66c.01-.35.29-.63.64-.64l13-.2c3.9-.03 8.45-.07 13.33-.11c4.88 0 10.09-.02 15.29-.04c5.2.02 10.4.03 15.28.05c4.88.04 9.43.08 13.33.11l13 .2c.36.01.64.3.64.66c-.02.34-.3.62-.65.63"></path></svg> },
  { number: "500K+", label: "Happy Customers", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><g fill="none"><path fill="#ffef5e" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11"></path><path fill="#fff9bf" d="M12 4.826a11.8 11.8 0 0 1 10.994 7.517c0-.114.006-.228.006-.343a11 11 0 1 0-21.994.343A11.8 11.8 0 0 1 12 4.826"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11" strokeWidth={1}></path><path stroke="#191919" d="M6.739 10.326a.24.24 0 0 1 0-.478m.001.478a.24.24 0 0 0 0-.478m10.52.478a.24.24 0 0 1 0-.478m0 .478a.24.24 0 0 0 0-.478" strokeWidth={1}></path><path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.705 15.348a.957.957 0 0 1 .927 1.194a4.782 4.782 0 0 1-9.264 0a.956.956 0 0 1 .927-1.194z" strokeWidth={1}></path></g></svg> },
  { number: "150+", label: "Countries Served", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 48 48"><path fill="#7cb342" d="M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4"></path><path fill="#0277bd" d="M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21m-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2s.2-.2.2-.4c0-.6-.6-1.3-1-1.7s-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9m.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5s1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8s.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7"></path></svg> },
  { number: "99.9%", label: "Uptime Guarantee", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 64 64"><path fill="#edc26e" d="m61.13 23.718l-22.65-.105L31.583.692l-6.898 22.921l-22.651.105L20.423 38.35l-9.297 24.96l20.457-15.86L52.05 63.31l-9.308-24.96z"></path><path fill="#faec78" d="M53.09 26.904L38.48 24.22l-6.897-12.27l-6.898 12.27l-14.08 2.84l9.814 11.891l-2.572 15.85l13.732-6.751l14.11 6.903l-2.955-16z"></path></svg> }
];

const faqs = [
  {
    question: "How quickly can I set up my store?",
    answer: "Most merchants have their store up and running within 24 hours. Our intuitive setup wizard guides you through every step."
  },
  {
    question: "What payment methods do you support?",
    answer: "We support all major payment gateways including Stripe, PayPal, Square, and regional payment methods worldwide."
  },
  {
    question: "Can I migrate from another platform?",
    answer: "Yes! We offer free migration services from popular platforms like Shopify, WooCommerce, and Magento."
  },
  {
    question: "Do you provide customer support?",
    answer: "Absolutely! We offer 24/7 customer support via chat, email, and phone for all our plans."
  }
];

export default function Home2() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title> Modern E-commerce Platform | Home 2</title>
        <meta name="description" content="Transform your business with ShopHub's modern e-commerce platform. Fast, secure, and scalable solutions for businesses of all sizes." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio2.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Modern E-commerce
                    <span className="block text-indigo-200">Platform</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
                    Transform your business with our cutting-edge e-commerce solution. 
                    Built for speed, security, and scalability.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Link href="/contact" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg text-center">
                      Get Started Free
                    </Link>
                    <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 text-center">
                      Explore
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {heroFeatures.map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center items-center mb-2">
                          <div className="w-16 h-16 flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-indigo-200 mb-1">{feature.title}</h3>
                        <p className="text-sm text-indigo-100">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="text-center">
                                             <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                         <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 128 128">
                           <circle cx={117.33} cy={9.69} r={5.69} fill="#f44336"></circle>
                           <path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="M80.09 78.38s9.51 12.8 9.51 17.85s-4.1 9.15-9.15 9.15c-4.31 0-58.2-.11-64.15-.11s-9.32 3.49-9.32 3.49"></path>
                           <path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="M58.83 77.13s10.6 14.05 10.6 19.11s-4.64 9.12-9.69 9.12"></path>
                           <path fill="#2f7889" d="M82.77 86.73c-2.01-3.44-3.64-5.44-6.26-9.02c0 0 .69.15 2.55.15s3.2-.59 3.2-.59c2.64 3.73 3.43 4.68 4.84 7.18c0 0-.05 1.63-1.35 2.49s-2.98-.21-2.98-.21m-20.21.17c-2.79-4.26-5.02-7.51-5.02-7.51l6 .14s2.69 3.61 4.23 6.47c0 0 .23 1.3-1.49 1.98c-1.72.66-3.72-1.08-3.72-1.08"></path>
                           <path fill="none" stroke="#84b0c1" strokeMiterlimit={10} strokeWidth={4.913} d="m80.11 78.64l-69.94-4.66c-.23-.02-.4-.2-.4-.43V34.5c0-.37.29-.68.66-.7l88.63-5.64c.86-.06 1.48.8 1.17 1.6L81.41 77.82c-.21.53-.73.86-1.3.82z"></path>
                           <path fill="none" stroke="#84b0c1" strokeMiterlimit={10} strokeWidth={2.948} d="M23.67 33.06L21.83 74.5m17.71-42.52l-5.75 43.41M55.42 30.9l-9.67 45.38M71.3 29.82L57.71 77.17m29.46-48.43l-17.5 49.32M8.29 48.48l85.56-2.94M9.08 62.11h79.4"></path>
                           <circle cx={80.41} cy={116.46} r={7.54} fill="#424242"></circle>
                           <path fill="#84b0c1" d="M75.55 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"></path>
                           <path fill="#a8e3f0" d="M81.97 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.1 3.64-.21 4.73"></path>
                           <path fill="#2f7889" d="M80.53 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.53.59-1.68 1.54-3.29 1.54"></path>
                           <path fill="#757575" d="M78.04 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"></path>
                           <path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="m99.82 30.71l4.61-11.27c1.88-4.6 3.27-5.63 6.06-6.88l6.53-2.65"></path>
                           <circle cx={19.6} cy={116.46} r={7.54} fill="#424242"></circle>
                           <path fill="#84b0c1" d="M14.73 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"></path>
                           <path fill="#a8e3f0" d="M21.16 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.09 3.64-.21 4.73"></path>
                           <path fill="#2f7889" d="M19.72 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.54.59-1.69 1.54-3.29 1.54"></path>
                           <path fill="#757575" d="M17.22 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"></path>
                         </svg>
                       </div>
                      <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
                      <p className="text-indigo-100 mb-6">Join thousands of successful businesses using ShopHub</p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                          <span className="text-sm">No setup fees</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                          <span className="text-sm">14-day free trial</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-300 rounded-full mr-3"></div>
                          <span className="text-sm">Cancel anytime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Services Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Everything You Need to Succeed
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Comprehensive e-commerce solutions designed to grow your business
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See what our customers say about their experience with ShopHub
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 h-full">
                      <div className="flex items-center mb-6">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">"{testimonial.content}"</p>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Choose the plan that fits your business needs. All plans include our core features.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className={`bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border-2 ${plan.popular ? 'border-indigo-600' : 'border-gray-100 dark:border-gray-600'} h-full`}>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{plan.price}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors duration-300 ${
                        plan.popular 
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}>
                        {plan.popular ? 'Get Started' : 'Choose Plan'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by the Numbers</h2>
                <p className="text-xl text-indigo-200 max-w-3xl mx-auto">Trusted by businesses worldwide with proven results</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center items-center mb-3">
                      <div className="text-4xl mx-auto text-center">{stat.icon}</div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-200 mb-2">{stat.number}</div>
                    <div className="text-indigo-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                  Join thousands of successful businesses that trust ShopHub for their e-commerce success. 
                  Start your journey today and discover what's possible.
                </p>
              </div>

                             <div className="max-w-4xl mx-auto">
                 {/* Benefits */}
                 <div className="grid md:grid-cols-3 gap-8">
                   <div className="flex items-start space-x-4">
                     <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">Instant Setup</h3>
                       <p className="text-indigo-100">Get your store up and running in minutes, not days</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start space-x-4">
                     <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">24/7 Support</h3>
                       <p className="text-indigo-100">Our expert team is here to help you succeed</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start space-x-4">
                     <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">Scale with Confidence</h3>
                       <p className="text-indigo-100">Built to handle growth from startup to enterprise</p>
                     </div>
                   </div>
                 </div>
               </div>

              {/* Bottom CTA Buttons */}
              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Know More
                  </Link>
                  <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 text-center">
                    Schedule a Demo
                  </Link>
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
