Citizen.CreateThread(function() 
    while true do
        Wait(0)
        if IsControlJustReleased(0, 51) then
            SetNuiFocus(true, true)
            SendNUIMessage({act = "carlistOpen", payload = {isVisible = true}})
            Wait(1000)
        end
    end
end)

local carlist = {
    {
      name = "Adder",
      image = "https://docs.fivem.net/vehicles/adder.webp",
      maxSpeed = 300,
      price = 1200000,
    },

    {
      name = "Ardent",
      image = "https://docs.fivem.net/vehicles/ardent.webp",
      maxSpeed = 250,
      price = 700000,
    },

    {
      name = "GP1",
      image = "https://docs.fivem.net/vehicles/gp1.webp",
      maxSpeed = 315,
      price = 1300000,
    },

    {
      name = "Ignus",
      image = "https://docs.fivem.net/vehicles/ignus.webp",
      maxSpeed = 330,
      price = 1700000,
    },

    {
      name = "Impaler",
      image = "https://docs.fivem.net/vehicles/impaler.webp",
      maxSpeed = 225,
      price = 500000,
    },

    {
      name = "Impaler SZ",
      image = "https://docs.fivem.net/vehicles/impaler5.webp",
      maxSpeed = 230,
      price = 650000,
    },

}

RegisterNUICallback("carshop", function (data, cb)
    if data.act == "getCarlist" then
        cb({code = 200, data = carlist})
    elseif data.act == "closeCarshop" then
        SetNuiFocus(false, false)
        cb({code = 200})
    end
end)