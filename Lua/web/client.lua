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