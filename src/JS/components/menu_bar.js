let menuBar = () => {
  let menuBar = `<div class="menuBar w-full h-[72px] flex relative items-center">
        <div class="logo w-[200px] h-[72px] md:mx-auto sm:mx-auto lg:mx-0 flex justify-center items-center object-contain">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" aria-labelledby="blz-icon-title-battlenet-logo" viewBox="0 0 196 32" part="icon"><title id="blz-icon-title-battlenet-logo">Battle.net</title><path fill="#148EFF" stroke="none" d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"></path><path stroke="none" d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"></path><path fill="#148EFF" stroke="none" d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"></path><path stroke="none" d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"></path></svg>
        </div>
        <div class="items_container w-fit h-full px-4 absolute right-0 flex gap-5">
          <div class="items w-fit h-full flex justify-center sm:hidden md:hidden lg:flex xl:flex 2xl:flex items-center gap-2.5">
            <div class="content flex items-center justify-center gap-2.5 cursor-pointer duration-150 hover:bg-[#292b33] p-2.5 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90"  class="w-[24px] h-[24px]
            md:hidden sm:hidden lg:block" viewBox="0 0 24 24" part="icon"><path d="m18.06 9.646-.707-.707a.5.5 0 0 0-.707 0L13 12.586V4a1 1 0 1 0-2 0v8.586L7.353 8.939a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .708l5.707 5.707a.5.5 0 0 0 .707 0l5.708-5.707a.5.5 0 0 0 0-.708Z"></path><path d="M3.5 16a.5.5 0 0 0-.5.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V19H5v-2.5a.5.5 0 0 0-.5-.5z"></path></svg>
            <p class="text-[16px] font-[object-sans] text-[#fff] md:hidden sm:hidden lg:block">Download battle.net</p>
            </div>
          </div>
          <div class="items w-fit h-full flex justify-center items-center sm:hidden md:hidden lg:flex xl:flex 2xl:flex gap-2.5">
            <div class="content flex items-center justify-center gap-2.5 cursor-pointer duration-150 hover:bg-[#292b33] p-2.5 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90"  class="w-[24px] h-[24px]
            md:hidden sm:hidden lg:block" viewBox="0 0 24 24" part="icon"><path d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"></path></svg>
            <p class="text-[16px] font-[object-sans] text-[#fff] md:hidden sm:hidden lg:block">Support</p>
            </div>
          </div>
          <div class="items w-fit h-full flex justify-center items-center gap-2.5">
            <div id="accountBtn" class="content flex items-center justify-center gap-2.5 cursor-pointer duration-150 hover:bg-[#292b33] p-2.5 rounded-sm">
              <div class="account_container w-fit h-full flex justify-center items-center group  gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90" viewBox="0 0 24 24" part="icon" class="w-[24px] h-[24px]
                  md:hidden sm:hidden lg:block"><path d="M15.75 9.75a3.73 3.73 0 0 1-1.433 2.949A3.73 3.73 0 0 1 12 13.5a3.73 3.73 0 0 1-3.023-1.53 3.75 3.75 0 1 1 6.773-2.22m-5.5 0a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.047-4.73q.223.29.393.595A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.445-2.139l.005.005q.171-.305.393-.596c.442-.575.92-.943 1.36-1.13a7.37 7.37 0 0 0 3.687.992c1.34 0 2.594-.364 3.687-.993.44.188.919.556 1.36 1.13Zm-8.835-3.194c-1.188.268-2.237 1.115-2.99 2.172H5.22a8 8 0 1 1 13.56 0c-.755-1.056-1.804-1.904-2.992-2.172a4 4 0 0 0-.487-.075c-.947.715-2.082 1.131-3.3 1.131-1.22 0-2.355-.416-3.302-1.131q-.247.022-.487.075"></path></svg>
                  <p class="text-[16px] font-[object-sans] text-[#fff] md:hidden sm:hidden lg:block">Account</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90" viewBox="0 0 24 24" part="icon" class="w-[12px] h-[12px] md:hidden sm:hidden lg:block"><path d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" id="accountInfo" class="w-6 h-6  md:block sm:block lg:hidden" fill="none" stroke="#fff" viewBox="0 0 24 24" part="icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path></svg>

                <div class="subcontent gap-2.5 w-[320px] sm:hidden md:hidden sm:group-hover:hidden md:group-hover:hidden h-fit px-6 pt-6 absolute right-1 top-full hidden flex-col items-center border-[1px] border-[#292b33] bg-[#1a1c23] lg:group-hover:flex xl:group-hover:flex 2xl:group-hover:flex rounded-sm">
                  <a href="#" class="w-[270px] h-[48px] bg-[#0074e0] mx-auto mt-2 rounded-[4px] text-white text-[16px] font-[object-sans] flex justify-center items-center hover:bg-[#148eff] duration-300">Log In</a>
                  <div class="w-[270px] h-[48px] p-3 hover:bg-[#292b33] cursor-pointer duration-100 rounded-[4px] flex gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90" class="w-8 h-6" viewBox="0 0 24 24" part="icon"><path d="M11.675 13.771a6.5 6.5 0 0 0-.954 2.042 6.8 6.8 0 0 1-3.048-.864c-.335.163-.705.457-1.057.916q-.141.184-.257.375a6.97 6.97 0 0 0 4.159 1.744c.052.71.218 1.388.48 2.016a9 9 0 1 1 8.974-8.282A6.5 6.5 0 0 0 18 11.076V11a7 7 0 1 0-12.973 3.651c.762-.995 1.821-1.75 3.002-1.85.853.643 1.874 1.018 2.971 1.018q.343 0 .675-.048"></path><path d="M14.375 8.975a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m-2 0a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0M16.455 13h1.093a.5.5 0 0 1 .492.412l.167.936a.55.55 0 0 0 .288.381q.146.079.282.171a.55.55 0 0 0 .49.076l1.051-.368a.5.5 0 0 1 .59.209l.518.837a.5.5 0 0 1-.12.659l-.943.725a.55.55 0 0 0-.205.445v.058a.55.55 0 0 0 .205.445l.943.726a.5.5 0 0 1 .12.659l-.516.837a.5.5 0 0 1-.591.209l-1.053-.369a.55.55 0 0 0-.49.076q-.135.093-.282.171a.55.55 0 0 0-.289.382l-.166.935a.5.5 0 0 1-.493.412h-1.093a.5.5 0 0 1-.492-.412l-.167-.935a.55.55 0 0 0-.288-.382 3 3 0 0 1-.282-.171.55.55 0 0 0-.49-.075l-1.05.367a.5.5 0 0 1-.591-.209l-.517-.837a.5.5 0 0 1 .12-.659l.94-.724a.55.55 0 0 0 .206-.445v-.06a.55.55 0 0 0-.205-.445l-.942-.725a.5.5 0 0 1-.12-.659l.517-.837a.5.5 0 0 1 .59-.21l1.052.37a.55.55 0 0 0 .49-.076q.136-.093.283-.172a.55.55 0 0 0 .29-.382l.166-.934a.5.5 0 0 1 .492-.412M17 19.09a1.58 1.58 0 1 0 0-3.157 1.58 1.58 0 0 0 0 3.158Z"></path></svg>
                    <p class="text-[14px] text-[#ffffffb8] font-[nato-sans-reg]">Account Setting</p>
                  </div> 
                  <div class="w-[270px] h-[48px] p-3 hover:bg-[#292b33] cursor-pointer duration-100 rounded-[4px] flex gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90" class="w-8 h-6" viewBox="0 0 24 24" part="icon"><path d="M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.116 0-2.204.745-3.128 1.617A19 19 0 0 0 12 6.09c-.39-.459-.856-.986-1.372-1.473C9.704 3.745 8.616 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518zm1.557-1.472-.002.002-.1.09-.109-.099-.003-.003c-2.615-2.371-4.623-4.198-6.001-5.883C4.536 11.008 4 9.733 4 8.5 4 6.525 5.525 5 7.5 5c.197 0 .607.121 1.25.631.609.484 1.193 1.129 1.727 1.756L12 9.175l1.523-1.788c.534-.627 1.118-1.272 1.727-1.756.643-.51 1.053-.631 1.25-.631C18.475 5 20 6.525 20 8.5c0 1.233-.537 2.508-1.892 4.167-1.379 1.686-3.386 3.515-6 5.89Z"></path></svg>
                    <p class="text-[14px] text-[#ffffffb8] font-[nato-sans-reg]">Wish List</p>
                  </div>
                  <div class="w-[270px] h-[48px] p-3 hover:bg-[#292b33] cursor-pointer duration-100 rounded-[4px] flex gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90" class="w-8 h-6" viewBox="0 0 24 24" part="icon"><path d="M2 2h2v16H2zm3 20v-2H3v2zm4-2H7v2h2zm2 0h5v2h-5zm10 0h-3v2h3zm1-18h-3v16h3zm-6 0h1v16h-1zm-2 0h-2v16h2zM6 2h4v16H6z"></path></svg>
                    <p class="text-[14px] text-[#ffffffb8] font-[nato-sans-reg]">Redeem Code</p>
                  </div> 
                  <div class="w-[270px] h-[48px] p-3 hover:bg-[#292b33] cursor-pointer duration-100 rounded-[4px] flex gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90" class="w-8 h-6" viewBox="0 0 24 24" part="icon"><path d="M13.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H15v16h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H17v-3h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V4h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM17 9h3v6h-3zM4 7h9v2H4v6h9v2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></path></svg>
                    <p class="text-[14px] text-[#ffffffb8] font-[nato-sans-reg]">Redeem Code</p>
                  </div>
                  <div class="w-[320px] h-[73px] bg-[#23252B] hover:bg-[#292b33] cursor-pointer duration-100 flex gap-1.5 items-center px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#8C8D90" class="w-8 h-6" viewBox="0 0 24 24" part="icon"><path d="M3.114 20.31 4 15 15.585 3.414a2 2 0 0 1 2.828 0l2.172 2.172a2 2 0 0 1 0 2.828L9 20l-5.31.885a.5.5 0 0 1-.575-.576Zm4.924-2.177 8.34-8.34-2.172-2.172-8.34 8.34-.434 2.606zm9.754-9.754L19.171 7l-2.172-2.172-1.378 1.38z"></path></svg>
                    <p class="text-[14px] text-[#ffffffb8] font-[nato-sans-reg]">Create Account</p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="hamburgerMenubtn" class="hamburgerMenu_container w-[40px] h-[40px] px-2 justify-center items-center sm:flex md:flex lg:hidden absolute left-4 hover:bg-[#23252B] cursor-pointer duration-200 rounded-sm group" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24" part="icon"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
        </div>
        <div id="hamburgerMenuItems" class="hamburgerMenuItems sm:w-[315px] md:w-[420px] h-full group-hover:sm:flex group-hover:md:flex lg:hidden fixed top-0 left-[-100%] z-[9999] duration-500">
          <div class="w-full h-full bg-[#22242c] overflow-y-scroll flex flex-col">
            <div class=" topPart w-full h-fit bg-[#1a1c23] flex flex-col">
              <div class="heading w-full h-[56px] flex items-center relative">
                <div class="logo w-[163px] h-full flex justify-center items-center mx-auto">
                <svg class="w-[174px] h-[24px]" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" aria-labelledby="blz-icon-title-battlenet-logo" viewBox="0 0 196 32" part="icon"><title id="blz-icon-title-battlenet-logo">Battle.net</title><path fill="#148EFF" stroke="none" d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"></path><path stroke="none" d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"></path><path fill="#148EFF" stroke="none" d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"></path><path stroke="none" d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"></path></svg>
                </div>
                <div id="closeBtnTimes" class="w-10 h-10 flex hover:bg-[#23252B] rounded-md duration-200 justify-center items-center absolute left-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" part="icon"><path d="M18 6 6 18M6 6l12 12"></path></svg>
                </div>
              </div>
              <div class="items_container w-full h-fit flex flex-col transition-all duration-300 ease-in-out">
               <div class="panel w-full h-fit duration-300">
                <div class="panelItems w-full h-fit duration-300 flex flex-col justify-center gap-3 cursor-pointer">
                  <div class="headingText w-fit h-fit flex p-3 justify-center items-center">
                    <p class="text-[16px] text-white font-[nato-sans-reg]">Warcraft</p>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300 ">
                    <div class="svg w-12 h-12  flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300 ">
                    <div class="svg w-12 h-12 flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div class="panelItems w-full h-fit duration-300 flex flex-col justify-center gap-3 cursor-pointer">
                  <div class="headingText w-fit h-fit p-3 flex justify-center items-center">
                    <p class="text-[16px] text-white font-[nato-sans-reg]">Diablo</p>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12 0 flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] 0">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] 0">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden  flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12 0 flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] 0">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] 0">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panelItems w-full h-fit duration-300 flex flex-col justify-center gap-3 cursor-pointer">
                  <div class="headingText w-fit h-fit p-3 flex justify-center items-center">
                    <p class="text-[16px] text-white font-[nato-sans-reg]">Overwatch</p>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12  flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12  flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
                      <g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div class="panelItems w-full h-fit duration-300 flex flex-col justify-center gap-3 cursor-pointer">
                  <div class="headingText w-fit h-fit p-3 flex justify-center items-center">
                    <p class="text-[16px] text-white font-[nato-sans-reg]">Call of Duty</p>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12  flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12  flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="panelItems w-full h-fit duration-300 flex flex-col justify-center gap-3 cursor-pointer">
                  <div class="headingText w-fit h-fit p-3 flex justify-center items-center">
                    <p class="text-[16px] text-white font-[nato-sans-reg]">DOOM</p>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden  flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12 0 flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px]  flex flex-col">
                      <div class="gameName w-fit h-[50%] 0">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] 0">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden  flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12 0 flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px]  flex flex-col">
                      <div class="gameName w-fit h-[50%] 0">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] 0">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="panelItems w-full h-fit duration-300 flex flex-col justify-center gap-3 cursor-pointer">
                  <div class="headingText w-fit h-fit p-3 flex justify-center items-center">
                    <p class="text-[16px] text-white font-[nato-sans-reg]">More</p>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12  flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300">
                    <div class="svg w-12 h-12  flex justify-center items-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon">
                    <style type="text/css">
	.st0{fill:#2B374C;}
	.st1{fill:#F4BF2A;}
                      </style>
<g>
	<circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	<path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	<path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
                      </g>
                      </svg>
                    </div>
                    <div class="txt_container w-fit h-[48px] flex flex-col">
                      <div class="gameName w-fit h-[50%] ">
                        <p class="text-[16px] text-white font-[nato-sans-reg]">World of Warcraft</p>
                      </div>
                      <div class="gamecat w-fit h-[50%] ">
                        <p class="text-[14px] text-[#ffffff7A] font-[nato-sans-reg]">Massively Multiplayer RPG</p>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>
          </div>
          <div class="bottomPart w-full h-fit bg-[#22242c] duration-300 flex flex-col">
            <div class="panel w-full h-fit duration-300 flex flex-col">
                <div class="panelItems w-full h-fit duration-300 cursor-pointer flex flex-col justify-center gap-3">
                  <div class="headingText w-fit h-fit flex p-3 justify-center items-center">
                    <p class="text-[16px] text-white font-[object-sans] mt-6">Battle.net Balance</p>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300 ">
                    <div class="svg w-6 h-6 flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#C0C0C0" viewBox="0 0 24 24" part="icon"><path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"></path><path d="M11.5 7a.5.5 0 0 0-.5.5V11H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H11v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7.5a.5.5 0 0 0-.5-.5z"></path></svg>
                    </div>
                    <div class="txt_container w-fit h-fit flex justify-center">
                      <div class="gameName w-fit h-full ">
                        <p class="text-[16px] text-[#C0C0C0] font-[nato-sans-reg]">Add Balance</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300 ">
                    <div class="svg w-6 h-6  flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#C0C0C0" viewBox="0 0 24 24" part="icon"><path d="M16.066 7.245a2.75 2.75 0 0 0 1.006-3.756c-.325-.563-.803-1.1-1.489-1.34-.711-.247-1.485-.119-2.268.333-.295.17-.528.432-.708.688-.186.265-.35.574-.49.895a9 9 0 0 0-.535 1.715 9 9 0 0 0-1.557-1.494 5 5 0 0 0-.87-.53c-.285-.132-.618-.242-.958-.242-.904 0-1.638.276-2.13.846-.475.55-.62 1.254-.62 1.904 0 .659.23 1.263.616 1.736H5a2 2 0 0 0-2 2v3.53a.5.5 0 0 0 .5.5H4V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.97h.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 0-2-2h-4.242zm-.293-3.006a1.25 1.25 0 0 1-.457 1.707l-2.383 1.376a4.3 4.3 0 0 1 .062-.933 7.5 7.5 0 0 1 .498-1.725 3.7 3.7 0 0 1 .342-.632c.118-.168.2-.234.23-.25.517-.299.833-.283 1.025-.216.217.076.456.28.683.673M6.947 6.264c0-.454.104-.75.255-.924.132-.153.398-.326.995-.326.034 0 .139.016.325.102.177.083.386.21.612.377.453.334.923.79 1.293 1.244.253.311.422.578.52.777h-2.75c-.69 0-1.25-.56-1.25-1.25M18 19h-5v-4.899h5zm1-6.97h-6V10h6zm-8 0H5V10h6zM11 19H6v-4.899h5z"></path></svg>
                    </div>
                    <div class="txt_container w-fit h-fit flex justify-center">
                      <div class="gameName w-fit h-full ">
                        <p class="text-[16px] text-[#C0C0C0] font-[nato-sans-reg]">Gift Balance</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300 ">
                    <div class="svg w-6 h-6  flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#C0C0C0" viewBox="0 0 24 24" part="icon"><path d="M5.001 12a7 7 0 1 1 2.725 5.544.53.53 0 0 0-.695.032l-.713.713a.48.48 0 0 0 .027.712A9 9 0 1 0 3.001 12H1.208a.5.5 0 0 0-.354.854l2.793 2.792a.5.5 0 0 0 .707 0l2.793-2.792A.5.5 0 0 0 6.794 12H5Z"></path><path d="M12.001 7a1 1 0 0 0-1 1v4.036a1 1 0 0 0 .5.91l3.465 2a1 1 0 0 0 1-1.732l-2.965-1.712V8a1 1 0 0 0-1-1"></path></svg>
                    </div>
                    <div class="txt_container w-fit h-fit flex justify-center">
                      <div class="gameName w-fit h-full ">
                        <p class="text-[16px] text-[#C0C0C0] font-[nato-sans-reg]">Balance History</p>
                      </div>
                    </div>
                  </div>
                  <div class="items w-full max-h-0 overflow-hidden flex items-center gap-3.5 transition-all duration-300 ">
                    <div class="svg w-6 h-6 flex justify-center items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="#C0C0C0" viewBox="0 0 24 24" part="icon"><path d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"></path></svg>
                    </div>
                    <div class="txt_container w-fit h-fit flex justify-center">
                      <div class="gameName w-fit h-full ">
                        <p class="text-[16px] text-[#C0C0C0] font-[nato-sans-reg]">Balance Help</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div id="accountBtnPanel" class="sm:w-[315px] md:w-[420px] h-[100%] top-0 fixed duration-500 z-[99999] right-[-100%] bg-[#22242c] lg:hidden xl:hidden 2xl:hidden">
        <div class="top_container w-full h-[356px] bg-[#1a1c23] flex flex-col gap-0.5">
          <div class="top_part w-full h-[56px] flex">
          <div class="svg w-[163px] h-[48px] px-2 mx-auto my-auto flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" aria-labelledby="blz-icon-title-battlenet-logo" viewBox="0 0 196 32" part="icon"><title id="blz-icon-title-battlenet-logo">Battle.net</title><path fill="#148EFF" stroke="none" d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"></path><path stroke="none" d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"></path><path fill="#148EFF" stroke="none" d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"></path><path stroke="none" d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"></path></svg>
          </div>
          <div id="closebtnAccount" class="times w-[40px] h-[40px] flex justify-center mr-2 items-center my-auto hover:bg-[#23252B] cursor-pointer rounded-md duration-200 ">
            <svg class="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" part="icon"><path d="M18 6 6 18M6 6l12 12"></path></svg>
          </div>
        </div>
        <div class="button_container w-full h-[80px] flex justify-center items-center">
          <button class="w-[389px] h-[48px] bg-[#148eff] rounded-sm text-[16px] font-[object-sans] duration-300 hover:bg-[#47A6FF] cursor-pointer">Log In</button>
        </div>
        <div class="items w-full h-[48px] flex justify-center items-center group">
          <div class="w-[400px] h-[48px] flex items-center px-3 rounded-sm gap-2 cursor-pointer duration-300 group-hover:bg-[#272930]">
            <div class="svg w-[24px] h-[24px]">
              <svg class="fill-[#ffffff7A]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M11.675 13.771a6.5 6.5 0 0 0-.954 2.042 6.8 6.8 0 0 1-3.048-.864c-.335.163-.705.457-1.057.916q-.141.184-.257.375a6.97 6.97 0 0 0 4.159 1.744c.052.71.218 1.388.48 2.016a9 9 0 1 1 8.974-8.282A6.5 6.5 0 0 0 18 11.076V11a7 7 0 1 0-12.973 3.651c.762-.995 1.821-1.75 3.002-1.85.853.643 1.874 1.018 2.971 1.018q.343 0 .675-.048"></path><path d="M14.375 8.975a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m-2 0a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0M16.455 13h1.093a.5.5 0 0 1 .492.412l.167.936a.55.55 0 0 0 .288.381q.146.079.282.171a.55.55 0 0 0 .49.076l1.051-.368a.5.5 0 0 1 .59.209l.518.837a.5.5 0 0 1-.12.659l-.943.725a.55.55 0 0 0-.205.445v.058a.55.55 0 0 0 .205.445l.943.726a.5.5 0 0 1 .12.659l-.516.837a.5.5 0 0 1-.591.209l-1.053-.369a.55.55 0 0 0-.49.076q-.135.093-.282.171a.55.55 0 0 0-.289.382l-.166.935a.5.5 0 0 1-.493.412h-1.093a.5.5 0 0 1-.492-.412l-.167-.935a.55.55 0 0 0-.288-.382 3 3 0 0 1-.282-.171.55.55 0 0 0-.49-.075l-1.05.367a.5.5 0 0 1-.591-.209l-.517-.837a.5.5 0 0 1 .12-.659l.94-.724a.55.55 0 0 0 .206-.445v-.06a.55.55 0 0 0-.205-.445l-.942-.725a.5.5 0 0 1-.12-.659l.517-.837a.5.5 0 0 1 .59-.21l1.052.37a.55.55 0 0 0 .49-.076q.136-.093.283-.172a.55.55 0 0 0 .29-.382l.166-.934a.5.5 0 0 1 .492-.412M17 19.09a1.58 1.58 0 1 0 0-3.157 1.58 1.58 0 0 0 0 3.158Z"></path></svg>
            </div>
            <div class="txt">
              <p class="text-[16px] font-[nato-sans-reg]">Account Setting</p>
            </div>
          </div>
        </div>
        <div class="items w-full h-[48px] flex justify-center items-center group">
          <div class="w-[400px] h-[48px] flex items-center px-3 rounded-sm gap-2 cursor-pointer duration-300 group-hover:bg-[#272930]">
            <div class="svg w-[24px] h-[24px]">
             <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff7A]" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.116 0-2.204.745-3.128 1.617A19 19 0 0 0 12 6.09c-.39-.459-.856-.986-1.372-1.473C9.704 3.745 8.616 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518zm1.557-1.472-.002.002-.1.09-.109-.099-.003-.003c-2.615-2.371-4.623-4.198-6.001-5.883C4.536 11.008 4 9.733 4 8.5 4 6.525 5.525 5 7.5 5c.197 0 .607.121 1.25.631.609.484 1.193 1.129 1.727 1.756L12 9.175l1.523-1.788c.534-.627 1.118-1.272 1.727-1.756.643-.51 1.053-.631 1.25-.631C18.475 5 20 6.525 20 8.5c0 1.233-.537 2.508-1.892 4.167-1.379 1.686-3.386 3.515-6 5.89Z"></path></svg>
            </div>
            <div class="txt">
              <p class="text-[16px] font-[nato-sans-reg]">Wish List</p>
            </div>
          </div>
        </div>
        <div class="items w-full h-[48px] flex justify-center items-center group">
          <div class="w-[400px] h-[48px] flex items-center px-3 rounded-sm gap-2 cursor-pointer duration-300 group-hover:bg-[#272930]">
            <div class="svg w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff7A]" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M2 2h2v16H2zm3 20v-2H3v2zm4-2H7v2h2zm2 0h5v2h-5zm10 0h-3v2h3zm1-18h-3v16h3zm-6 0h1v16h-1zm-2 0h-2v16h2zM6 2h4v16H6z"></path></svg>
            </div>
            <div class="txt">
              <p class="text-[16px] font-[nato-sans-reg]">Redeem Code</p>
            </div>
          </div>
        </div>
        <div class="items w-full h-[48px] flex justify-center items-center group">
          <div class="w-[400px] h-[48px] flex items-center px-3 rounded-sm gap-2 cursor-pointer duration-300 group-hover:bg-[#272930]">
            <div class="svg w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff7a]" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M13.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H15v16h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H17v-3h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V4h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM17 9h3v6h-3zM4 7h9v2H4v6h9v2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></path></svg>
            </div>
            <div class="txt">
              <p class="text-[16px] font-[nato-sans-reg]">Change BattleTag</p>
            </div>
          </div>
        </div>
        </div>
        <div class="bottom_container w-full h-fit p-2.5 flex flex-col gap-2">
          <div class="content w-full h-[48px] p-3 cursor-pointer hover:bg-[#32343d] rounded-sm flex items-center gap-2">
            <div class="svg w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff7A]" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"></path></svg>
            </div>
            <div class="txt">
              <p class="text-[16px] font-[nato-sans-reg]">Support</p>
            </div>
          </div>
          <div class="content w-full h-[48px] p-3 cursor-pointer hover:bg-[#32343d] rounded-sm flex items-center gap-2">
            <div class="svg w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff7A]" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 3v14H8V5z"></path></svg>
            </div>
            <div class="txt">
              <p class="text-[16px] font-[nato-sans-reg]">Battle.net Mobile App</p>
            </div>
          </div>
          <div class="content w-full h-[48px] p-3 cursor-pointer hover:bg-[#32343d] rounded-sm flex items-center gap-2">
            <div class="svg w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#ffffff7A]" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M3.114 20.31 4 15 15.585 3.414a2 2 0 0 1 2.828 0l2.172 2.172a2 2 0 0 1 0 2.828L9 20l-5.31.885a.5.5 0 0 1-.575-.576Zm4.924-2.177 8.34-8.34-2.172-2.172-8.34 8.34-.434 2.606zm9.754-9.754L19.171 7l-2.172-2.172-1.378 1.38z"></path></svg>
            </div>
            <div class="txt">
              <p class="text-[16px] font-[nato-sans-reg]">Create Account</p>
            </div>
          </div>
        </div>
      </div>
      </div>`;
  document.querySelector("#header").insertAdjacentHTML("afterbegin", menuBar);
};
export default menuBar;
