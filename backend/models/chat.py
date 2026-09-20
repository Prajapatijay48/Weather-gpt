from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from .weather import AlertModel


class ChatMessageItem(BaseModel):
    role: str = Field(..., description="'user', 'assistant', or 'system'")
    content: str = Field(..., description="Message text content")


class ChatRequest(BaseModel):
    message: str = Field(..., description="User query or question about weather")
    location: Optional[str] = Field("Ahmedabad", description="Contextual target city or location")
    conversation_history: Optional[List[ChatMessageItem]] = Field(
        default_factory=list,
        description="Previous turns of conversation for follow-up questions"
    )
    persona: Optional[str] = Field("Meteorologist", description="User persona/role: Farmer, Traveler, Athlete, Meteorologist")



class ChatResponse(BaseModel):
    success: bool = True
    message: str = Field(..., description="WeatherGPT's conversational response")
    location: str = Field(..., description="Location resolved for this query")
    weather_context_used: bool = Field(True, description="Indicates verified backend weather was referenced")
    intent: Optional[str] = Field(None, description="Identified meteorological intent")
    alerts: List[AlertModel] = Field(default_factory=list, description="Active alerts relevant to context")
    source: str = Field("WeatherGPT AI Engine", description="Inference engine provider")
