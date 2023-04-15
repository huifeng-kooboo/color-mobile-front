<template>
    <div>
        <van-grid clickable :column-num="3" >
            <van-grid-item style="background-color: aqua;" icon-color="#2ea6e2" icon="home-o"  to="/" />
            <!-- <van-grid-item style="background-color: aqua;" icon-color="#2ea6e2" icon="plus"  to="/" /> -->
            <van-button type="primary" icon="plus" class="btnPlus" round style="width: 80px; margin-top: 10px;"></van-button>
            <van-grid-item style="background-color: aqua;" icon-color="#2ea6e2" icon="manager" to="/personalCenter" />
        </van-grid>
    </div>

</template>
