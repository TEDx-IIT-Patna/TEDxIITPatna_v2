<template>
    <section>
        <div class="footer">
            <img src="../assets/footerimg.png" class="card-img-top" alt="...">
            <div class="footer-body ">
                <div class="container footer-container">
                    <div class="row row-cols-2">
                        <div class="col">Contact us:</div>
                        <div class="col">Reach us:</div>
                    </div>
                </div>
                <!-- </div> -->
                <div class="container footer-container">
                    <div class="row ">
                        <div class="col">info1</div>
                        <div class="col">addressline1</div>

                    </div>
                    <div class="row">
                        <div class="col">info2</div>
                        <div class="col">line2 </div>

                    </div>

                    <div class="row">
                        <div class="col">info3 </div>
                        <div class="col">line3 </div>

                    </div>
                    <div class="row">
                        <div class="col">info4 </div>
                        <div class="col">line4 </div>

                    </div>
                    <div class="Map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.080990562473!2d84.84695271665835!3d25.53567897977689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20Of%20Technology%E2%80%93Patna%20(IIT%E2%80%93Patna)!5e0!3m2!1sen!2sin!4v1654531203276!5m2!1sen!2sin"
                            width="400" height="300" style="border:0;" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div>This independent TEDx Event is Operated Under License From TED|Copyright © 2022 All Rights
                            Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.footer{
    box-sizing: border-box;
    position: absolute;
    margin-top: 370vh;
    width: 100%;
}
.footer-body {
    background-color: #000000;
    height: 62vh;
    color: white;
    text-align: center;
}

.footer-container {
    padding-top: 40px;
    text-align: center;

}

.Map {
    margin: -90px;
}
</style>

<script>
export default {
    name: 'footer'

}
</script>