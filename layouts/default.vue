<template>
    <div data-animation="default" class="rl_navbar1_component w-nav" data-easing2="ease"
        fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium"
        data-w-id="f8f18d06-bccd-09ae-f8e3-24e291be01a7" role="banner" data-duration="400">
        <div class="rl_navbar1_container">
            <a href="/" class="rl_navbar1_logo-link w-nav-brand"><img src="../images/spives-20sports.png" loading="lazy"
                    width="127" sizes="127px" alt="" srcset="
              ../images/spives-20sports-p-500.png   500w,
              ../images/spives-20sports-p-800.png   800w,
              ../images/spives-20sports-p-1080.png 1080w,
              ../images/spives-20sports-p-1600.png 1600w,
              ../images/spives-20sports-p-2000.png 2000w,
              ../images/spives-20sports-p-2600.png 2600w,
              ../images/spives-20sports.png        2978w
            " class="rl_navbar1_logo" /></a>
            <nav role="navigation" class="rl_navbar1_menu is-page-height-tablet w-nav-menu">
                <a href="/talents" class="rl_navbar1_link w-nav-link">Talents</a><a href="#"
                    class="rl_navbar1_link w-nav-link">Scouts</a><a href="#" class="rl_navbar1_link w-nav-link">Contact
                    Us</a>
                <div class="rl_navbar1_menu-buttons">
                    <a href="#" class="rl_navbar1_button w-button">Join Waitlist</a>
                </div>
            </nav>
            <div class="rl_navbar1_menu-button w-nav-button">
                <div class="rl_menu-icon">
                    <div class="rl_menu-icon_line-top"></div>
                    <div class="rl_menu-icon_line-middle">
                        <div class="rl_menu-icon_line-middle-inner"></div>
                    </div>
                    <div class="rl_menu-icon_line-bottom"></div>
                </div>
            </div>
        </div>
    </div>
    <slot />
</template>
<style></style>
<script setup>
onMounted(() => {
    console.log('mounted')
})
</script>