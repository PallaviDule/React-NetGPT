# Tailwind CSS Styling Reference

This file documents specific Tailwind utilities used in the project that go beyond the basics. These classes help in layout, responsiveness, image handling, and dynamic styling.

## 1. `bg-gradient-to-b from-black`
- **What it does**: Creates a vertical gradient starting from black at the top, fading to transparent or the background.
- **Why used**: To create a dark-to-clear background gradient — often used behind titles or overlays for better contrast on images.
- **Where used**: Used for header, to make it look like it slowly matching with background.

## 2. `absolute` & `relative`
- **What it does**:
  - `relative`: Sets a reference frame for absolutely positioned child elements.
  - `absolute`: Positions an element relative to the nearest `relative` parent.
- **Why used**: To layer elements (like buttons, text, or overlays) over others, especially on top of images.
- **Where used**: Movie card components — title/text positioned over thumbnails or trailers, Also in header for background and content on header tab.

## 3. `opacity` & `bg-opacity`
- **What it does**:
  - `opacity`: Sets overall transparency of the element.
  - `bg-opacity`: Adjusts only the background's opacity, not affecting children.
- **Why used**: For soft overlays or glassmorphism effects without dimming the child content.
- **Where used**: In Video Title appearing on video trailer playing, Login page div.

## 4. `w-full` & `aspect-video`
- **What it does**:
  - `w-full`: Makes the element take 100% width of its parent.
  - `aspect-video`: Maintains a 16:9 ratio (great for video or trailer containers).
- **Why used**: For responsive media elements like embedded trailers or banners.
- **Where used**: Trailer sections or video player components.

## 5. `flex`, `flex-shrink-0`, `overflow-x-scroll`
- **What it does**:
  - `flex`: Enables flexbox layout.
  - `flex-shrink-0`: Prevents items from shrinking when container is narrow.
  - `overflow-x-scroll`: Enables horizontal scrolling.
- **Why used**: For horizontal scrollable movie carousels, keeping poster sizes intact.
- **Where used**:
  - flex with `<div><img/><div>` - shrink to screen
  - flex with only `<div><div>Dummy</div></div>`  - scrollable
  - flex `<img/>` - no shrinking and scrollable

## 6. `relative` on Movie List
- **What it does**: Enables absolutely positioning child elements relative to the movie list container.
- **Why used**: Allowed precise control to position movie titles or icons over the list.
- **Where used**: Movie cards — helped in placing the title or play button over thumbnails.

## 7. `h-screen`, `w-screen`, `object-cover`
- **What it does**:
  - `h-screen` / `w-screen`: Takes up full viewport height/width.
  - `object-cover`: Ensures image covers the full container while maintaining aspect ratio.
- **Why used**: For fullscreen background banners or responsive media sections.
- **Where used**: Netflix background image


## Pro Tip
For deeper understanding and visual guides, refer to the     
1. [Tailwind Playground](https://play.tailwindcss.com/) to test combinations live.     
2. [Tailwind Doc](https://tailwindcss.com/docs/installation/using-vite) 
